import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Title, Description } from 'pages/games/components/Game/styles';
import { Switch, Grid, capitalize, BLACK_500, PURPLE_400 } from 'admin-library';
import Tabs from 'components/Tabs';
import { gamePlatforms } from 'const';

import Requirements from './components/Requirements';

const { Row, Col } = Grid;

interface Props {
  formik: any;
}

const SystemRequirements = (props: Props) => {
  const { formik } = props;
  const { t } = useTranslation();

  const handlePlatformsChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    const newPlatforms = checked
      ? [...formik.values.platforms, name]
      : formik.values.platforms.filter((platform: string) => platform !== name);

    if (!checked) {
      delete formik.values.requirements[name];
      delete formik.errors.requirements[name];
    } else {
      formik.values.requirements[name] = {
        minimal: {},
        recommended: {},
      };
    }

    formik.setFieldValue('platforms', newPlatforms);
  };

  return (
    <Wrapper>
      <Title>{t('game.fields.supported_platforms.label')}</Title>
      <Description>{t('game.fields.supported_platforms.description')}</Description>
      <Platforms>
        {gamePlatforms.map(platform => (
          <Platform key={platform}>
            <StyledSwitch
              checked={formik.values.platforms.includes(platform)}
              onChange={handlePlatformsChange}
              name={platform}
            />
            {platform}
          </Platform>
        ))}
      </Platforms>
      <Tabs>
        {gamePlatforms
          .filter(platform => formik.values.platforms.includes(platform))
          .map(platform => (
              <Tab key={platform} label={capitalize(platform)}>
                <Row gap="24px">
                  <Col xs={6}>
                    <Requirements
                      platform={platform}
                      formik={formik}
                      type="recommended"
                    />
                  </Col>
                  <Col xs={6}>
                    <Requirements
                      platform={platform}
                      formik={formik}
                      type="minimal"
                    />
                  </Col>
                </Row>
              </Tab>
            ))
        }
      </Tabs>
    </Wrapper >
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(SystemRequirements, areEqual);

const Wrapper = styled.div`
  margin-top: 40px;
  padding-bottom: 24px;
`;

const StyledSwitch = styled(Switch)``;

const Platform = styled.label`
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    color: ${PURPLE_400};
  }

  ${StyledSwitch} {
    margin-right: 8px;
  }

  :last-child {
    margin-right: 0;
  }
`;

const Platforms = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Tab = styled.div<{ label: string }>`
  border-bottom: 1px solid ${BLACK_500};
  padding: 24px 0;
`;
