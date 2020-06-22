import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Game } from 'types/games';
import { getGameByIdRequest } from 'api';
import Loader from 'components/Loader';

import GameEdit from './components/GameEdit';

const GamesPage = () => {
  const [game, setGame] = useState<Game | undefined>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { id = '' } = useParams();

  const goToGames = () => {
    history.push('/games');
  };

  const getGame = async () => {
    const { json, error } = await getGameByIdRequest(id);

    if (error) {
      alert(error.message);
    }

    setGame(json);
    setLoading(false);
  };

  useEffect(() => {
    getGame();
  }, []);

  if (loading) return <Loader />;

  if (!game) {
    goToGames();
    return null;
  }

  return <GameEdit game={game} onUpdate={goToGames} />;
};

export default GamesPage;
