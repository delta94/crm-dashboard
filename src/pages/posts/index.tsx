import React from 'react';
import { Post } from 'types/posts';
import { getPostsRequest } from 'api/posts';
import Loader from 'components/Loader';
import useItemsList from 'hooks/useItemsList';
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

import { useStyles } from './styles';
import ListItem from './components/ListItem';

const PostsPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const {
    currentItems,
    loading,
    page,
    total,
    onChangeRowsPerPage,
    onChangePage,
    onChangeItem,
    rowsPerPage,
  } = useItemsList<Post>(getPostsRequest, 'posts');

  if (loading) return <Loader />;

  const handleRowClick = (id: number) => {
    history.push(`/posts/${id}`);
  };

  const handleCreatePost = () => {
    history.push('/posts/new');
  };

  return (
    <Paper className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="primary">
          {t('posts.name')}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleCreatePost}
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
              <TableCell className={classes.cell} align="center">{t('status')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('created_at')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('published_at')}</TableCell>
              <TableCell className={classes.cell} align="center">{t('slug')}</TableCell>
              <TableCell className={classes.cell} align="center">{`${t('publish')} / ${t('to_draft')}`}</TableCell>
              <TableCell className={classes.cell} align="center">{t('delete')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map(post => (
              <ListItem
                key={post.id}
                post={post}
                onClick={handleRowClick}
                cellClassName={classes.cell}
                onChangeItem={onChangeItem}
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
    </Paper>
  );
};

export default React.memo(PostsPage);
