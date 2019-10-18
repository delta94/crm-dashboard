import React from 'react';
import { Route } from 'react-router-dom';
import Documents from 'pages/Documents';
import Settings from 'pages/Settings';
import AuthSuccess from 'pages/AuthSuccess';

export default [
  <Route exact key="documents" path="/documents" component={Documents} />,
  <Route exact key="settings" path="/settings" component={Settings} />,
  <Route key="auth_success" path="/auth_success" component={AuthSuccess} />,
];
