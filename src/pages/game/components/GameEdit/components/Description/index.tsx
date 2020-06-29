import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import { useFormik } from 'formik';
import { TextField, Button, makeStyles, FormGroup, Typography } from '@material-ui/core';
import MarkdownEditor from 'components/MarkdownEditor';

import Review from './components/Review';
import SocialLinks from './components/SocialLinks';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
  },
});

const validate = ({ social_links = [] }: { social_links?: any[] }) => {
  const errors: Record<string, string> = {};

  social_links.forEach(({ url }) => {
    if (!url) {
      errors.social_links = 'Required';
    }
  });

  return errors;
};

const Description = (props: Props) => {
  const { game, onEdit } = props;
  const { revision } = game;
  const {
    summary = '',
    description: initDescription = '',
    review = [],
    social_links = [],
  } = revision;
  const [description, setDescription] = useState(initDescription);
  const classes = useStyles();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      summary,
      review,
      social_links,
    },
    onSubmit: (values: any) => {
      const gameData = {
        ...values,
        description,
      };

      onEdit(gameData);
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className={classes.field} variant="h6">
        {t('games.fields.summary.label')}
      </Typography>
      <FormGroup className={classes.field}>
        <TextField
          name="summary"
          label={t('games.fields.summary.label')}
          variant="outlined"
          value={formik.values.summary}
          onChange={formik.handleChange}
          multiline
          rows={3}
        />
      </FormGroup>
      <Typography className={classes.field} variant="h6">
        {t('games.fields.description.label')}
      </Typography>
      <FormGroup className={classes.field}>
        <MarkdownEditor
          value={description}
          onChange={setDescription}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Review
          value={formik.values.review}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <SocialLinks
          value={formik.values.social_links}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        {t('save')}
      </Button>
    </form>
  );
};

export default React.memo(Description);
