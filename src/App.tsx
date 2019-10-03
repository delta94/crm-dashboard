import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Login from 'pages/Login';
import { isEnvDefined } from 'helpers';
import authProvider from 'authProvider';

const mockDataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  if (!isEnvDefined()) {
    return <div>Environment variables is not defined</div>;
  }

  return (
    <Admin
      loginPage={Login}
      dataProvider={mockDataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
