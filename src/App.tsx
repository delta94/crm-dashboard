import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { isEnvDefined, env } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import Layout from 'components/Layout';
import groups from 'resources/Groups';

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
      <Resource name="users" list={ListGuesser} edit={EditGuesser} />
      <Resource name="groups" {...groups} />
      <Resource name="group_role" />
    </Admin>
  );
};

export default App;
