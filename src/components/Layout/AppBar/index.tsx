import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import { Typography, IconButton } from '@material-ui/core';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Settings as SettingsIcon, HelpOutline as HelpOutlineIcon } from '@material-ui/icons';
import { TranslationContextProps } from 'ra-core';
import { QilinLogo } from 'assets/icons';
import { LocaleSwitcher, Notifications } from 'components';
import getClient from 'apolloClient';
import { getUserId, env } from 'helpers';
import { USER_QUERY } from '../../../pages/AuthSuccess/query';

const fetchUrl = `${env('AUTH_URL')}/jwt`;

const styles = createStyles({
  spacer: {
    flex: 1,
  },
  switcher: {
    margin: '0 1em',
  },
});

const getUser = async (jwt: string) => {
  const client = getClient(jwt);
  console.log(jwt);

  const userId = getUserId(jwt);
  console.log(userId);
  
  client.query({
    query: USER_QUERY,
    // variables: { id: +userId },
  }).then(data => console.log(data));

};

const getJWTToken = async () => {
  try {
    const data = await fetch(fetchUrl, {
      credentials: 'include',
    });

    const json = await data.json();
    const { jwt } = json;
    return jwt;
  } catch (error) {
    console.error(error);
  }
};

const onAuthSuccess = async () => {
  const jwt = await getJWTToken() || '';
  await getUser(jwt);
  // props.userLogin({ client: null, user: null });
};

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
      <div onClick={onAuthSuccess}>
        <QilinLogo />
      </div>
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
