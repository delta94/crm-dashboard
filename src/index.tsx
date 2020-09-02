import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider, I18nextProviderProps } from 'react-i18next';
import { i18n } from 'admin-library';
import { UserProvider } from 'containers/User';
import { SettingsProvider } from 'containers/Settings';
import { LanguagesProvider } from 'containers/Languages';

ReactDOM.render(
  <I18nextProvider i18n={i18n as I18nextProviderProps['i18n']}>
      <UserProvider>
        <SettingsProvider>
          <LanguagesProvider>
            <App />
          </LanguagesProvider>
        </SettingsProvider>
      </UserProvider>
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
