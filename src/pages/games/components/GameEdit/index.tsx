import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import { makeStyles, Paper, Tabs, Tab } from '@material-ui/core';

import General from './components/General';
import Rating from './components/Rating';
import Media from './components/Media';
import Description from './components/Description';

const useStyles = makeStyles({
  tab: {
    padding: '24px 0',
  },
});

interface Props {
  game: Game;
  onUpdate: () => void;
}

const GameEdit = (props: Props) => {
  const { game, onUpdate } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={activeTab}
          onChange={handleTabChange}
        >
          <Tab label={t('games.tabs.general')} />
          <Tab label={t('games.tabs.description')} />
          <Tab label={t('games.tabs.rating')} />
          <Tab label={t('games.tabs.media')} />
        </Tabs>
      </Paper>
      <div className={classes.tab} hidden={activeTab !== 0}>
        <General game={game} />
      </div>
      <div className={classes.tab} hidden={activeTab !== 1}>
        <Description game={game} />
      </div>
      <div className={classes.tab} hidden={activeTab !== 2}>
        <Rating game={game} />
      </div>
      <div className={classes.tab} hidden={activeTab !== 3}>
        <Media game={game} />
      </div>
    </div>
  );
};

export default React.memo(GameEdit);
