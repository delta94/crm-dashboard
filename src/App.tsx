import React from 'react';
import { Admin, Resource } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { isEnvDefined, env } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import groups from 'resources/Groups';
import invites from 'resources/Invites';
import users from 'resources/Users';
import { Layout } from 'components';

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
