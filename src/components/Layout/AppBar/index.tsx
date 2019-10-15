import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { TranslationContextProps } from 'ra-core';
import { QilinLogo } from 'assets/icons';
import { LocaleSwitcher } from 'components';

import styles from './styles';

interface AppBarProps {
  classes: any;
}

const MyUserMenu = translate((props: TranslationContextProps) => (
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
    <AppBar {...props} color="default" userMenu={<MyUserMenu />}>
      <QilinLogo />
      <Typography variant="headline" color="inherit">Qilin CRM</Typography>
      <span className={classes.spacer}></span>
      <IconButton color="inherit" href="https://github.com/qilin/crm-dashboard" target="_blank" rel="noopener">
        <HelpOutlineIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <div className={classes.switcher}>
        <LocaleSwitcher />
      </div>
    </AppBar>
  );
};

export default withStyles(styles)(MyAppBar);
