import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import TablePagination from '@material-ui/core/TablePagination';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Game } from 'types/games';

import GameCreate from './GameCreate';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  row: {
    cursor: 'pointer',
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
}

const GamesList = (props: Props) => {
  const { t } = useTranslation();
  const { games } = props;
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
            </TableRow>
          </TableHead>
          <TableBody>
            {games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, slug, title }) => (
              <TableRow key={id} onClick={handleRowClick(id)} className={classes.row}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="right">{title}</TableCell>
                <TableCell align="right">{slug}</TableCell>
              </TableRow>
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
      />
    </Paper>
  );
};

export default React.memo(GamesList);
