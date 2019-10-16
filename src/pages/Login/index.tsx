import React from 'react';
import compose from 'recompose/compose';
import { TranslationContextProps, translate } from 'ra-core';
import { FormControl, Button } from '@material-ui/core';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import { lightTheme } from 'components/Layout/themes';
import { LocaleSwitcher } from 'components';
import { IconDummy } from 'assets/icons';
import { env } from 'helpers';

import styles from './styles';

const frameSrc = `${env('AUTH_URL')}login`;

interface Props {
  classes: any;
}

const Login: React.FC<Props & TranslationContextProps> = (props: Props & TranslationContextProps) => {
  const { classes, translate } = props;

  return (
    <div className={classes.authBoard}>
      <FormControl className={classes.locales}>
        <LocaleSwitcher />
      </FormControl>
      <div className={classes.container}>
        <IconDummy />
        <span className={classes.title}>
          {translate('pages.login.title')}
        </span>
        <span className={classes.text}>
          {translate('pages.login.text')}
        </span>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          href={frameSrc}
        >
          {translate('pages.login.buttonText')}
        </Button>
      </div>
    </div>
  );
};

const enhance = compose<Props & TranslationContextProps, {}>(
  translate,
  withStyles(styles)
);

const EnhancedLogin = enhance(Login);

const LoginWithTheme = (props: any) => (
  <MuiThemeProvider theme={createMuiTheme(lightTheme)}>
    <EnhancedLogin {...props} />
  </MuiThemeProvider>
);

export default LoginWithTheme;
