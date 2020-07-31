import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout, Loader, Login, UserMenu, useUser, getCookie } from 'admin-library';
import { STORE_NAME } from 'const';
import NavLinks from 'components/NavLinks';
import { useTranslation } from 'react-i18next';
import { login, logout, HAS_SESSION, restoreSessionOnEnter } from 'auth';
import { getUserRequest } from 'api/profile';

const Games = React.lazy(() => import('./pages/games'));
const Game = React.lazy(() => import('./pages/game'));

function App() {
  const { t } = useTranslation();
  const { user, loading } = useUser(getUserRequest);
  const hasSession = getCookie(HAS_SESSION);

  if (!hasSession) restoreSessionOnEnter();

  if (loading) return <Loader />;

  if (!user) return <Login onLogin={login} />; 

  const userMenu = (
    <UserMenu
      menuItems={[{ title: t('logout'), onClick: logout }]}
      user={user}
    />
  );

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Layout
          navLinks={<NavLinks />}
          storeName={STORE_NAME}
          userMenu={userMenu}
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
