import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createOrUpdateGameRequest } from 'api/games';
import { Game } from 'types/games';

import General from './components/General';
import Rating from './components/Rating';
import Media from './components/Media';
import Description from './components/Description';
import Tabs from './components/Tabs';

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
    <div>
      <Tabs>
        <Tab label={t('game.tabs.general')}>
          <General game={game} onEdit={handleEdit} />
        </Tab>
        <Tab label={t('game.tabs.descriptions')}>
          <Description game={game} onEdit={handleEdit} />
        </Tab>
        <Tab label={t('game.tabs.rating')}>
          <Rating game={game} onEdit={handleEdit} />
        </Tab>
        <Tab label={t('game.tabs.media')}>
          <Media game={game} onEdit={handleEdit} />
        </Tab>
        <Tab label={t('game.tabs.price')} />
        <Tab label={t('game.tabs.sales')} />
        <Tab label={t('game.tabs.publish')} />
      </Tabs>
    </div>
  );
};

export default React.memo(GameEdit);

const Tab = styled.div<{ label: string }>``;
