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
import { publishGameRequest } from 'api/games';

const useStyles = makeStyles({
  row: {
    cursor: 'pointer',
  },
});

interface Props {
  game: Game;
  onClick: (id: string) => void;
  cellClassName?: string;
}

const ListItem = (props: Props) => {
  const { t } = useTranslation();
  const { game, onClick, cellClassName } = props;
  const { id, title, slug } = game;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    onClick(id);
  };

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
    <TableRow onClick={handleClick} className={classes.row}>
      <TableCell align="center" className={cellClassName}>
        {id}
      </TableCell>
      <TableCell align="center" className={cellClassName}>{title}</TableCell>
      <TableCell align="center" className={cellClassName}>{slug}</TableCell>
      <TableCell align="center" className={cellClassName}>
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
