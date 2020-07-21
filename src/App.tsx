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
import PostsIcon from '@material-ui/icons/MenuBook';
import { useTranslation } from 'react-i18next';
import { STORE_NAME } from 'const';

import './i18n';

const Games = React.lazy(() => import('./pages/games'));
const Game = React.lazy(() => import('./pages/game'));

const Posts = React.lazy(() => import('./pages/posts'));
const PostNew = React.lazy(() => import('./pages/post-new'));
const PostEdit = React.lazy(() => import('./pages/post-edit'));

function App() {
  const { t } = useTranslation();
  const navLinks = [
    {
      title: t('games.name'),
      icon: <GamesIcon />,
      href: '/games',
    },
    {
      title: t('posts.name'),
      icon: <PostsIcon />,
      href: '/posts',
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
            <Route path="/posts" exact>
              <Posts />
            </Route>
            <Route path="/posts/new" exact>
              <PostNew />
            </Route>
            <Route path="/posts/:id">
              <PostEdit />
            </Route>
            <Redirect to="/games" />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
