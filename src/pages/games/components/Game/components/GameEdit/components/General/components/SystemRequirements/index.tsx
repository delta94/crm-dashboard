import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Title, Description } from 'pages/games/components/Game/styles';
import { Switch, Grid, capitalize, BLACK_500 } from 'admin-library';
import Tabs from 'components/Tabs';

import Requirements from './components/Requirements';

const { Row, Col } = Grid;
const allPlatforms = ['windows', 'macOS', 'linux'];

interface Props {
  platformsValue: string[];
  requirementsValue: any;
  onChange: (name: string, value: any) => void;
}

const SystemRequirements = (props: Props) => {
  const { platformsValue, requirementsValue, onChange } = props;
  const { t } = useTranslation();

  const handlePlatformsChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    const newPlatforms = checked
      ? [...platformsValue, name]
      : platformsValue.filter(platform => platform !== name);

      onChange('platforms', newPlatforms);
  };

  return (
    <Wrapper>
      <Title>{t('game.fields.supported_platforms.label')}</Title>
      <Description>{t('game.fields.supported_platforms.description')}</Description>
      <Platforms>
        {allPlatforms.map(platform => (
          <Platform key={platform}>
            <StyledSwitch
              checked={platformsValue.includes(platform)}
              onChange={handlePlatformsChange}
              name={platform}
            />
            {platform}
          </Platform>
        ))}
      </Platforms>
      <Tabs>
        {allPlatforms
          .filter(platform => platformsValue.includes(platform))
          .map(platform => {
            if (!requirementsValue[platform]) {
              requirementsValue[platform] = {
                minimal: {},
                recommended: {},
              };
            }

            return (
              <Tab key={platform} label={capitalize(platform)}>
                <Row gap="24px">
                  <Col xs={6}>
                    <Requirements
                      nameSpace={`requirements.${platform}.recommended`}
                      value={requirementsValue[platform].recommended}
                      onChange={onChange}
                      type="recommended"
                    />
                  </Col>
                  <Col xs={6}>
                    <Requirements
                      nameSpace={`requirements.${platform}.minimal`}
                      value={requirementsValue[platform].minimal}
                      onChange={onChange}
                      type="minimal"
                    />
                  </Col>
                </Row>
              </Tab>
            );
          })
        }
      </Tabs>
    </Wrapper >
  );
};

export default React.memo(SystemRequirements);

const Wrapper = styled.div`
  margin-top: 40px;
  padding-bottom: 24px;
`;

const StyledSwitch = styled(Switch)``;

const Platform = styled.label`
  display: flex;
  align-items: center;
  margin-right: 24px;

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
