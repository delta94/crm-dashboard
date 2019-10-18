import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory as createHistory } from 'history';
import { isEnvDefined } from 'helpers';
import authProvider from 'authProvider';
import dataProvider from 'dataProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import groups from 'resources/Groups';
import invites from 'resources/Invites';
import users from 'resources/Users';
import { Layout } from 'components';

import customRoutes from './routes';

const history = createHistory();



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
