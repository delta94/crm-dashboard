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
import { Post } from 'types/posts';
import { publishPostRequest } from 'api/posts';
import { formateIsoDate } from 'helpers';

const useStyles = makeStyles({
  row: {
    cursor: 'pointer',
  },
});

interface Props {
  post: Post;
  onClick: (id: number) => void;
  cellClassName?: string;
}

const ListItem = (props: Props) => {
  const { t, i18n } = useTranslation();
  const { post, onClick, cellClassName } = props;
  const { id, created_at, published_at, status, slug } = post;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    onClick(id);
  };

  const handlePublishGame = async (event: SyntheticEvent) => {
    event.stopPropagation();
    setLoading(true);

    const { error } = await publishPostRequest(id);

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
      <TableCell align="center" className={cellClassName}>{status}</TableCell>
      <TableCell align="center" className={cellClassName}>
        {created_at && formateIsoDate(created_at, i18n.language)}
      </TableCell>
      <TableCell align="center" className={cellClassName}>
        {published_at && formateIsoDate(published_at, i18n.language)}
      </TableCell>
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
