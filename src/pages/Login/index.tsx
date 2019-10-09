import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate, userLogin } from 'react-admin';
import { Translate } from 'ra-core';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { lightTheme } from 'components/Layout/themes';
import LocaleSwitcher from 'components/LocaleSwitcher';
import { IconDummy } from 'assets/icons';
import { env } from 'helpers';

import styles from './styles';

const frameSrc = `${env('AUTH_URL')}/auth1/login`;

interface Auth1Message {
  access_token: string;
  success: boolean;
  error: string;
  expires_in: number;
}

interface Props {
  classes: any;
  isLoading: boolean;
  translate: Translate;
  userLogin: (payload: object) => void;
}

const Login: React.FC<Props> = (props: Props) => {
  const { classes, translate, isLoading, userLogin } = props;
  const [isFrameActive, setFrameActive] = useState(false);
  const showFrame = () => setFrameActive(true);
  const closeFrame = () => setFrameActive(false);

  const listenFrame = (event: any) => {
    try {
      // eslint-disable-next-line
      const { access_token: accessToken, success }: Auth1Message = event.data;

      if (accessToken && success) {
        userLogin({ success: true, accessToken });
      }
    } catch (error) {
      userLogin({ success: false, error });
    }
  };

  useEffect(() => {
    window.addEventListener('message', listenFrame);

    return () => window.removeEventListener('message', listenFrame);
  }, []);

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
          disabled={isLoading}
          className={classes.button}
          onClick={showFrame}
        >
          {isLoading && (
            <CircularProgress size={25} thickness={2} />
          )}
          {translate('pages.login.buttonText')}
        </Button>
        <Modal
          className={classes.modal}
          open={isFrameActive}
          onClose={closeFrame}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 100,
          }}
        >
          <Fade in={isFrameActive}>
            <div className={classes.modalContent}>
              <iframe
                title="authForm"
                slot="main"
                className={classes.frame}
                height="100%"
                width="100%"
                src={frameSrc}
              ></iframe>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};



const mapStateToProps = (state: any) => ({ isLoading: state.admin.loading > 0 });

const enhance = compose<Props, {}>(
  translate,
  connect(
    mapStateToProps,
    { userLogin }
  ),
  withStyles(styles)
);

const EnhancedLogin = enhance(Login);

const LoginWithTheme = (props: any) => (
  <MuiThemeProvider theme={createMuiTheme(lightTheme)}>
    <EnhancedLogin {...props} />
  </MuiThemeProvider>
);

export default LoginWithTheme;
