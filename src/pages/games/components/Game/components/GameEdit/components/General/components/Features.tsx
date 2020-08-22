import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getFeaturesRequest } from 'api';
import useResourses from 'hooks/useResourses';
import styled from 'styled-components';
import { Title, Description } from 'pages/games/components/Game/styles';
import { GRAY_100, Checkbox, WHITE } from 'admin-library';
import { Grid } from '@material-ui/core';

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
      <Description color={GRAY_100}>{t('game.fields.supported_features.description')}</Description>
      <Grid container spacing={3}>
        {features.map(({ id, name }) => (
          <Grid key={id} item xs={6}>
            <Feature>
              <StyledCheckbox
                name={`${id}`}
                checked={value.includes(id)}
                onChange={handleChange}
              />
              {name}
            </Feature>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default React.memo(Features);

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Feature = styled.label`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${WHITE};
  cursor: pointer;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 9px;
`;
