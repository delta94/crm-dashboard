import React, { ReactNode, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { TranslationContextProps } from 'ra-core';
import { translate } from 'react-admin';

import GameGeneral from './GameGeneral';
import GameDescription from './GameDescription';
import GameRatings from './GameRatings';
import GameMedia from './GameMedia';

const tabs = [
  {
    label: 'general',
    Component: GameGeneral,
  },
  {
    label: 'description',
    Component: GameDescription,
  },
  {
    label: 'ratings',
    Component: GameRatings,
  },
  {
    label: 'media',
    Component: GameMedia,
  },
];

interface TabContainerProps {
  children: ReactNode;
}

const TabContainer = (props: TabContainerProps) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const styles = createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
});

const GameTabs = (props: WithStyles<typeof styles> & TranslationContextProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: any, value: number) => {
    setActiveTab(value);
  };

  const { classes, translate } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          {tabs.map(({ label }) => (
            <Tab label={translate(`resources.games.tabs.${label}`)} key={label} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(({ Component }, index) => (
        activeTab === index && <TabContainer><Component /></TabContainer>
      ))}
    </div>
  );
};

export default withStyles(styles)(translate(GameTabs));
