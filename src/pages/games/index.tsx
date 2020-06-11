import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from 'types/games';
import { getGamesRequest } from 'api';

import GamesList from './components/GamesList';
import GameEdit from './components/GameEdit';

const GamesPage = () => {
  const [gamesMap, setGamesMap] = useState<Record<string, Game>>({});
  const [loading, setLoading] = useState(true);
  const { id = '' } = useParams();

  const getGames = async () => {
    const { json, error } = await getGamesRequest();

    if (!error) {
      setGamesMap(
        (json.games as Game[])?.reduce((acc: Record<string, Game>, game) => {
          acc[game.id] = game;
          return acc;
        }, {}),
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, []);

  if (loading) return <h3>...loading</h3>;

  const gamesList = Object.values(gamesMap);
  const game = gamesMap[id];

  if (!game) return <GamesList onUpdate={getGames} games={gamesList} />;

  return <GameEdit game={game} onUpdate={getGames} />;
};

export default GamesPage;
