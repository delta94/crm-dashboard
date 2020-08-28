import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, L10n } from 'types/games';
import { useFormik } from 'formik';
import { TextField, makeStyles, FormGroup, Typography } from '@material-ui/core';
import { PurpleButton } from 'admin-library';

import Review from './components/Review';
import SocialLinks from './components/SocialLinks';
import styled from 'styled-components';
import LanguagesTabs from 'components/LanguagesTabs';
import DescriptionEditor from './components/DescriptionEditor';

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
    l10n = [],
    review = [],
    social_links = [],
  } = revision;
  const classes = useStyles();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      l10n: l10n.reduce((acc, item) => ({ ...acc, [String(item.language_id)]: item }), {} as Record<string, L10n>),
      review,
      social_links,
    },
    onSubmit: (values: any) => {
      const { l10n, ...rest } = values;
      const gameData = {
        ...rest,
        l10n: Object.values(l10n),
      };

      // onEdit(gameData);
      console.log(gameData);
    },
    validate,
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <LanguagesTabs 
        value={formik.values.l10n}
        onChange={formik.setFieldValue}
        name="l10n"
        Component={DescriptionEditor}
      />
      <FormGroup className={classes.field}>
        <TextField
          name="summary"
          label={t('games.fields.summary.label')}
          variant="outlined"
          value={formik.values}
          onChange={formik.handleChange}
          multiline
          rows={3}
        />
      </FormGroup>
      <Typography className={classes.field} variant="h6">
        {t('games.fields.description.label')}
      </Typography>
      {/* <FormGroup className={classes.field}>
        <Editor
          value={description}
          onChange={setDescription}
        />
      </FormGroup> */}
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
