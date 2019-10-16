import React from 'react';
import { Admin, Resource } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { fetchUtils } from 'ra-core';
import { createBrowserHistory as createHistory } from 'history';
import { isEnvDefined, env, getCookie } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import groups from 'resources/Groups';
import invites from 'resources/Invites';
import users from 'resources/Users';
import { Layout } from 'components';

import customRoutes from './routes';

const history = createHistory();

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = getCookie('TOKEN') || '';
  options.headers.set('x-hasura-admin-secret', 'insecure');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = hasuraDataProvider(env('API_URL'), httpClient);

const App: React.FC = () => {
  if (!isEnvDefined()) {
    return <div>Environment variables is not defined</div>;
  }

  return (
    <Admin
      appLayout={Layout}
      loginPage={Login}
      dataProvider={dataProvider}
      authProvider={authProvider}
      locale="en"
      i18nProvider={i18nProvider}
      customRoutes={customRoutes}
      history={history}
    >
      <Resource name="groups" {...groups} />
      <Resource name="invites" {...invites} />
      <Resource name="users" {...users} />
      {/* Next line need for user_role from useredit */}
      <Resource name="group_role" />
      <Resource name="user_role" />
    </Admin>
  );
};

export default App;
