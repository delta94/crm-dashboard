import React from 'react';
import { Admin, Resource } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { isEnvDefined, env } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import Layout from 'components/Layout';
import { UserList } from 'pages/Users';
import { GroupList } from 'pages/Groups';

import customRoutes from './routes';

const headers = { 'x-hasura-admin-secret': 'insecure' };

const dataProvider = hasuraDataProvider(env('API_URL'), headers);

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
    >
      <Resource name="users" list={UserList} />
      <Resource name="groups" list={GroupList} />
    </Admin>
  );
};

export default App;
