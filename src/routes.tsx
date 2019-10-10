import React from 'react';
import { Route } from 'react-router-dom';
import Documents from 'pages/Documents';
import Settings from 'pages/Settings';

export default [
  <Route exact key="documents" path="/documents" component={Documents} />,
  <Route exact key="settings" path="/settings" component={Settings} />,
];
