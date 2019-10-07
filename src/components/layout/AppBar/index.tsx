import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import { Translate } from 'ra-core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { QilinLogo } from 'assets/icons';

import styles from './styles';

interface Props {
  translate: Translate;
}

interface AppBarProps {
  classes: any;
}

const MyUserMenu = translate((props: Props) => (
  <UserMenu {...props}>
    <MenuItemLink
      to="/settings"
      primaryText={props.translate('root.settings')}
      leftIcon={<SettingsIcon />}
    />
  </UserMenu>
));


const MyAppBar = (props: AppBarProps) => {
  const { classes } = props;
  return (
    <AppBar {...props} userMenu={<MyUserMenu />}>
      <Typography
        variant="title"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <QilinLogo />
      <Typography variant="headline" color="inherit">Qilin CRM</Typography>
      <span className={classes.spacer}></span>
      <IconButton color="inherit" href="https://github.com/qilin/crm-dashboard" target="_blank" rel="noopener">
        <HelpOutlineIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
    </AppBar>

  );
};

export default withStyles(styles)(MyAppBar);
