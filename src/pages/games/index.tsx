import React from 'react';
import { Switch, Route } from 'react-router-dom';

const GamesPage = () => {
  const GamesList = React.lazy(() => import('./components/GamesList'));
  const Game = React.lazy(() => import('./components/Game'));

  return (
    <Switch>
      <Route path="/games/:id" exact>
        <Game />
      </Route>
      <Route path="/">
        <GamesList />
      </Route>
    </Switch>
  );
};

export default React.memo(GamesPage);
