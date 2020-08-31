import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { createOrUpdateGameRequest } from 'api/games';
import { Game } from 'types/games';
import Tabs from 'components/Tabs';
import { Grid } from 'admin-library';

import ReviewQualityGuidelines from '../../../ReviewQualityGuidelines';
import GetPricingHelp from '../../../GetPricingHelp';
import General from './components/General';
import tabs from './tabs';

const { Row, Col } = Grid;

interface Props {
  game: Game;
  onUpdate: () => void;
}

const GameEdit = (props: Props) => {
  const { game, onUpdate } = props;
  const { id, title, slug, type } = game;
  const { t } = useTranslation();
  const history = useHistory();

  const handleEdit = async (data: any) => {
    const { error } = await createOrUpdateGameRequest({
      id,
      slug,
      title,
      type,
      ...data,
    });

    if (error) {
      alert(error.message);
      return;
    }

    onUpdate();
    history.push('/games');
  };

  return (
    <Wrapper>
      <Tabs>
        {tabs.map(({ Component, label }) => (
          <Tab key={label} label={t(label).toUpperCase()}>
          <Col xs={8}>
            <Component game={game} onEdit={handleEdit} />
          </Col>
          <Col xs={4}>
            {Component === General && <StyledReviewQualityGuidelines />}
            <GetPricingHelp />
          </Col>
        </Tab>
        ))}
        <Tab label={t('game.tabs.price').toUpperCase()} />
        <Tab label={t('game.tabs.sales').toUpperCase()} />
        <Tab label={t('game.tabs.publish').toUpperCase()} />
      </Tabs>
    </Wrapper>
  );
};

export default React.memo(GameEdit);

const Tab = styled(Row).attrs({ gap: '48px' })<{ label: string }>`
  padding: 24px 0;
`;

const Wrapper = styled.div``;

const StyledReviewQualityGuidelines = styled(ReviewQualityGuidelines)`
  margin-bottom: 24px;
`;
