import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { isEnvDefined, env } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import Layout from 'components/Layout';

import customRoutes from './routes';

const dataProvider = hasuraDataProvider(env('API_URL'));

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
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
