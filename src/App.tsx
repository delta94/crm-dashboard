import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { isEnvDefined } from 'helpers';
import authProvider from 'authProvider';
import i18nProvider from 'i18nProvider';
import Login from 'pages/Login';
import Layout from 'components/Layout';


const mockDataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  if (!isEnvDefined()) {
    return <div>Environment variables is not defined</div>;
  }

  return (
    <Admin
      appLayout={Layout}
      loginPage={Login}
      dataProvider={mockDataProvider}
      authProvider={authProvider}
      locale="en"
      i18nProvider={i18nProvider}
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
