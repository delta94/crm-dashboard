import React, { useState, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  Button,
  TableRow,
  TableCell,
  CircularProgress,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { Game } from 'types/games';
import { publishGameRequest } from 'api';

const useStyles = makeStyles({
  row: {
    cursor: 'pointer',
  },
});

interface Props {
  game: Game;
  onClick: () => void;
}

const ListItem = (props: Props) => {
  const { t } = useTranslation();
  const { game, onClick } = props;
  const { id, title, slug } = game;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handlePublishGame = async (event: SyntheticEvent) => {
    event.stopPropagation();
    setLoading(true);

    const { error } = await publishGameRequest(id);

    setLoading(false);

    if (error) {
      alert(error.message);
    }
  };

  return (
    <TableRow onClick={onClick} className={classes.row}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{title}</TableCell>
      <TableCell align="right">{slug}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          color="primary"
          onClick={handlePublishGame}
          startIcon={!loading && <PublishIcon />}
          disabled={loading}
        >
          {loading ? <CircularProgress size={20} color="primary" /> : t('publish')}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(ListItem);
