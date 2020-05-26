import React, { ReactNode, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import PlatformTab from './PlatformTab';

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

const PlatformsTabs = (props: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const { classes, platforms = [] } = props;

  if (!platforms.length) return null;

  const handleChange = (_: any, value: number) => {
    setActiveTab(value);
  };

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
          {(platforms as string[]).map(platform => (
            <Tab label={platform} key={platform} />
          ))}
        </Tabs>
      </AppBar>
      {(platforms as string[]).map((platform, index) => (
        activeTab === index && (
          <TabContainer>
            <Grid container justify="space-around">
              <Grid xs={5}>
                <PlatformTab platform={platform} type="minimal" />
              </Grid>
              <Grid xs={5}>
                <PlatformTab platform={platform} type="recommended" />
              </Grid>
            </Grid>
          </TabContainer>
        )))}
    </div>
  );
};

export default withStyles(styles)(PlatformsTabs);
