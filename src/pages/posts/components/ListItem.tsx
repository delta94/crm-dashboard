import React, { useState, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  Button,
  TableRow,
  TableCell,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import { Post } from 'types/posts';
import { publishPostRequest, changePostToDraftRequest, deletePostRequest } from 'api/posts';
import { formateIsoDate } from 'helpers';

const useStyles = makeStyles({
  row: {
    cursor: 'pointer',
  },
});

interface Props {
  post: Post;
  onClick: (id: number) => void;
  onChangeItem: () => void;
  cellClassName?: string;
}

const ListItem = (props: Props) => {
  const { t, i18n } = useTranslation();
  const { post, onClick, cellClassName, onChangeItem } = props;
  const { id, created_at, published_at, status, slug } = post;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const isPublishedPost = status === 'published';

  const handleClick = () => {
    onClick(id);
  };

  const handlePublishOrDraftGame = async (event: SyntheticEvent) => {
    event.stopPropagation();
    const request = isPublishedPost ? changePostToDraftRequest : publishPostRequest;
    setLoading(true);

    const { error } = await request(id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    onChangeItem();
  };

  const handleDeletePost = async (event: SyntheticEvent) => {
    event.stopPropagation();
    setLoading(true);

    const { error } = await deletePostRequest(id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    onChangeItem();
  };

  return (
    <TableRow onClick={handleClick} className={classes.row}>
      <TableCell align="center" className={cellClassName}>
        {id}
      </TableCell>
      <TableCell align="center" className={cellClassName}>{status.toUpperCase()}</TableCell>
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
          onClick={handlePublishOrDraftGame}
          startIcon={!isPublishedPost && <PublishIcon />}
          disabled={loading}
        >
          {isPublishedPost ? t('to_draft') : t('publish')}
        </Button>
      </TableCell>
      <TableCell align="center" className={cellClassName}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDeletePost}
          startIcon={<DeleteIcon />}
          disabled={loading}
        >
          {t('delete')}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(ListItem);
