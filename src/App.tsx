import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout, Loader, Login } from 'admin-library';
import { STORE_NAME } from 'const';
import NavLinks from 'components/NavLinks';
import UserMenu from 'components/UserMenu';

import './i18n';

const Games = React.lazy(() => import('./pages/games'));
const Game = React.lazy(() => import('./pages/game'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Layout
          navLinks={<NavLinks />}
          storeName={STORE_NAME}
          userMenu={<UserMenu />}
        >
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
