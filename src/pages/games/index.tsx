import React, { useState, useEffect } from 'react';
import { Game } from 'types/games';
import { getGamesRequest } from 'api';
import Loader from 'components/Loader';

import GamesList from './components/GamesList';

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const getGames = async () => {
    const { json, error } = await getGamesRequest();

    if (!error) {
      setGames(json.games);
    }

    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, []);

  if (loading) return <Loader />;

  return <GamesList onUpdate={getGames} games={games} />;
};

export default GamesPage;
