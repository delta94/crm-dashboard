import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import { useFormik } from 'formik';
import { TextField, makeStyles, FormGroup, Typography } from '@material-ui/core';
import { PurpleButton } from 'admin-library';

import Review from './components/Review';
import SocialLinks from './components/SocialLinks';
import styled from 'styled-components';
// import MarkdownEditor from 'components/MarkdownEditor';
import Editor from 'components/Editor';

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
  const isValid = social_links.every(({ url }) => !!url);

  return isValid ? {} : { social_links: 'Required' };
};

const Descriptions = (props: Props) => {
  const { game } = props;
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

      // onEdit(gameData);
      console.log(gameData);
    },
    validate,
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      
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
        <Editor
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
      <SaveButton type="submit" disabled={!formik.isValid}>
        {t('save_changes')}
      </SaveButton>
    </Wrapper>
  );
};

export default React.memo(Descriptions);

const Wrapper = styled.form`
  padding: 40px 0;
`;

const SaveButton = styled(PurpleButton)`
  margin-top: 16px;
`;
