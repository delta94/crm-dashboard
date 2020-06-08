import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from 'components/layout';

import './i18n';

const Games = React.lazy(() => import('./pages/games'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Layout>
          <Switch>
            <Route path="/games" exact>
              <Games />
            </Route>
            <Route path="/games/:id">
              <Games />
            </Route>
            <Redirect to="/games" />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
