import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  Paper,
  Toolbar,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Game } from 'types/games';

import GameCreate from './GameCreate';
import ListItem from './ListItem';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

interface Props {
  games: Game[];
  onUpdate: () => void;
}

const GamesList = (props: Props) => {
  const { t } = useTranslation();
  const { games, onUpdate } = props;
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRowClick = (id: string) => () => {
    history.push(`/games/${id}`);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Paper className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          {t('games.name')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        >
          {t('create')}
        </Button>
      </Toolbar>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">{t('name')}</TableCell>
              <TableCell align="right">{t('slug')}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(game => (
              <ListItem
                key={game.id}
                game={game}
                onClick={handleRowClick(game.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={games.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <GameCreate
        open={openModal}
        onClose={handleCloseModal}
        onUpdate={onUpdate}
      />
    </Paper>
  );
};

export default React.memo(GamesList);
