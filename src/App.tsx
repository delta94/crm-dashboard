import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/Loader';

import './i18n';

const Games = React.lazy(() => import('./pages/games'));
const Game = React.lazy(() => import('./pages/game'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Switch>
            <Route path="/games" exact>
              <Games />
            </Route>
            <Route path="/games/:id">
              <Game />
            </Route>
            <Redirect to="/games" />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
