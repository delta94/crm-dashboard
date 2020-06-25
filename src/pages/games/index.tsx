import React, { useState, useEffect } from 'react';
import { Game } from 'types/games';
import { getGamesRequest } from 'api';
import Loader from 'components/Loader';

import GamesList from './components/GamesList';

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const start = page * rowsPerPage;
  const end = Math.min((start + rowsPerPage), total);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleGameCreate = () => {
    setGames([]);
    setPage(0);
  };

  const getGames = async () => {
    const { json, error } = await getGamesRequest(start, rowsPerPage);

    if (!error) {
      setGames([...games.slice(0, start), ...json.games]);
      setTotal(json.pagination.total);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (games[end - 1]) return;

    getGames();
    // eslint-disable-next-line
  }, [page]);

  if (loading) return <Loader />;

  const currentGames = games.slice(start, end);

  return (
    <GamesList
      onCreate={handleGameCreate}
      games={currentGames}
      total={total}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default React.memo(GamesPage);
