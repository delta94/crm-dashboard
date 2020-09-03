import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getFeaturesRequest } from 'api';
import useResourses from 'hooks/useResourses';
import styled from 'styled-components/macro';
import { Title, Description } from 'pages/games/components/Game/styles';
import { Checkbox, WHITE, Grid, PURPLE_400 } from 'admin-library';

const { Row, Col } = Grid;

interface Props {
  className?: string;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

const Features = (props: Props) => {
  const { value, onChange, className } = props;
  const { t } = useTranslation();
  const { resources: features } = useResourses<NameWithId>(getFeaturesRequest);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    const newValue = checked
      ? value.concat(+name)
      : value.filter(id => id !== +name);

    onChange('features', newValue);
  };

  return (
    <Wrapper className={className}>
      <Title>{t('game.fields.supported_features.label')}</Title>
      <Description>{t('game.fields.supported_features.description')}</Description>
      <Row gap="24px">
        {features.map(({ id, name }) => (
          <StyledCol xs={6} key={id}>
            <Feature>
              <StyledCheckbox
                name={`${id}`}
                checked={value.includes(id)}
                onChange={handleChange}
              />
              {name}
            </Feature>
          </StyledCol>
        ))}
      </Row>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Features, areEqual);

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Feature = styled.label`
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${WHITE};
  cursor: pointer;

  :hover {
    color: ${PURPLE_400};
  }
`;

const StyledCol = styled(Col)`
  margin-bottom: 14px;

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 9px;
`;
