import React, { Suspense } from 'react';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Loader, getCookie } from 'admin-library';
import Layout from 'components/Layout';
import { HAS_SESSION, restoreSessionOnEnter } from 'auth';

const Games = React.lazy(() => import('./pages/games'));

function App() {
  const hasSession = getCookie(HAS_SESSION);
  if (!hasSession) restoreSessionOnEnter();

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/games">
              <Games />
            </Route>
            <Redirect to="/games" />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
