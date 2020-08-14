import React from 'react';
import { Game } from 'types/games';
import { getGamesRequest } from 'api/games';
import { useItemsList, Loader } from 'admin-library';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
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

import GameCreate from './components/GameCreate';
import ListItem from './components/ListItem';
import { useStyles } from './styles';

const GamesPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);
  const { t } = useTranslation();
  const {
    currentItems,
    loading,
    page,
    total,
    onItemCreate,
    onChangeRowsPerPage,
    onChangePage,
    rowsPerPage,
  } = useItemsList<Game>(getGamesRequest, 'games');

  if (loading) return <Loader />;

  const handleRowClick = (id: string) => {
    history.push(`/games/${id}`);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <Paper className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="primary">
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
              <TableCell className={classes.cell} align="center">ID</TableCell>
              <TableCell className={classes.cell} align="center">{t('name')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('slug')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('publish')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map(game => (
              <ListItem
                key={game.id}
                game={game}
                onClick={handleRowClick}
                cellClassName={classes.cell}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
      <GameCreate
        open={openModal}
        onClose={handleCloseModal}
        onCreate={onItemCreate}
      />
    </Paper>
  );
};

export default React.memo(GamesPage);
