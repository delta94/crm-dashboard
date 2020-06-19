import React from 'react';
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
  cell: {
    maxWidth: 50,
    width: '25%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});

interface Props {
  games: Game[];
  onCreate: () => void;
  total: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GamesList = (props: Props) => {
  const { t } = useTranslation();
  const {
    games,
    onCreate,
    total,
    page,
    rowsPerPage,
    onPageChange,
    onChangeRowsPerPage,
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);

  const handleRowClick = (id: string) => () => {
    history.push(`/games/${id}`);
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
              <TableCell className={classes.cell} align="center">ID</TableCell>
              <TableCell className={classes.cell} align="center">{t('name')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('slug')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('publish')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map(game => (
              <ListItem
                key={game.id}
                game={game}
                onClick={handleRowClick(game.id)}
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
        onChangePage={onPageChange}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
      <GameCreate
        open={openModal}
        onClose={handleCloseModal}
        onCreate={onCreate}
      />
    </Paper>
  );
};

export default React.memo(GamesList);
