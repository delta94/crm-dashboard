import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout, Loader } from 'admin-library';
import GamesIcon from '@material-ui/icons/Gamepad';
import { useTranslation } from 'react-i18next';
import { STORE_NAME } from 'const';

import './i18n';

const Games = React.lazy(() => import('./pages/games'));
const Game = React.lazy(() => import('./pages/game'));

function App() {
  const { t } = useTranslation();
  const navLinks = [
    {
      title: t('games.name'),
      icon: <GamesIcon />,
      href: '/games',
    },
  ];

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Layout navLinks={navLinks} storeName={STORE_NAME}>
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
