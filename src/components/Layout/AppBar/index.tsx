import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import { Typography, IconButton } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Settings as SettingsIcon, HelpOutline as HelpOutlineIcon } from '@material-ui/icons';
import { TranslationContextProps } from 'ra-core';
import { QilinLogo } from 'assets/icons';
import { LocaleSwitcher, Notifications } from 'components';

const styles = createStyles({
  spacer: {
    flex: 1,
  },
  switcher: {
    margin: '0 1em',
  },
});

const MyUserMenu = translate((props: TranslationContextProps) => (
  <UserMenu {...props}>
    <MenuItemLink
      to="/settings"
      primaryText={props.translate('root.settings')}
      leftIcon={<SettingsIcon />}
    />
  </UserMenu>
));

const MyAppBar = (props: WithStyles<typeof styles>) => {
  const { classes, ...rest } = props;

  return (
    <AppBar {...rest} color="default" userMenu={<MyUserMenu />}>
      <QilinLogo />
      <Typography variant="headline" color="inherit">Qilin CRM</Typography>
      <span className={classes.spacer}></span>
      <IconButton color="inherit" href="https://github.com/qilin/crm-dashboard" target="_blank" rel="noopener">
        <HelpOutlineIcon />
      </IconButton>
      <Notifications />
      <div className={classes.switcher}>
        <LocaleSwitcher />
      </div>
    </AppBar>
  );
};

export default withStyles(styles)(MyAppBar);
