import React from 'react';
import { useTranslation } from 'react-i18next';
import { Post as PostType } from 'types/posts';
import { Typography, FormGroup, TextField, Box, makeStyles, Button } from '@material-ui/core';
import { useFormik } from 'formik';

import Content from './components/Content';
import { useHistory } from 'react-router-dom';
import { createOrUpdatePostRequest } from 'api/posts';

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
  },
});

interface Props {
  post?: PostType;
}

const validate = (values: any) => {
  const errors: Record<string, string> = {};

  if (!values.slug) {
    errors.slug = 'Required';
  }

  return errors;
};

const Post = (props: Props) => {
  const isNewPost = !props.post;
  const { post = {} as PostType } = props;
  const {
    id,
    slug = '',
    cover = '',
    l10n = [],
  } = post;
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      slug,
      cover,
      l10n,
    },
    onSubmit: async values => {
      const { error } = await createOrUpdatePostRequest({
        ...(id && { id }),
        ...values,
      });

      if (error) {
        alert(error.message);
        return;
      }

      history.push('/posts');
    },
    validate,
  });

  return (
    <Box padding="20px">
      <Typography gutterBottom variant="h5" color="primary">
        {t(`posts.${isNewPost ? 'create' : 'edit'}`)}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Typography gutterBottom variant="h6">
          {t('posts.fields.slug.label')}
        </Typography>
        <FormGroup>
          <TextField
            error={formik.touched.slug && !!formik.errors.slug}
            name="slug"
            label={t('posts.fields.slug.label')}
            variant="outlined"
            value={formik.values.slug}
            onChange={formik.handleChange}
            className={classes.field}
            helperText={formik.errors.slug}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
        <Typography gutterBottom variant="h6">
          {t('posts.fields.cover.label')}
        </Typography>
        <FormGroup>
          <TextField
            name="cover"
            label={t('posts.fields.cover.label')}
            variant="outlined"
            value={formik.values.cover}
            onChange={formik.handleChange}
            className={classes.field}
          />
        </FormGroup>
        <Content
          value={formik.values.l10n}
          onChange={formik.setFieldValue}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          {t('save')}
        </Button>
      </form>
    </Box>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Post, areEqual);
