import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, L10n } from 'types/games';
import { useFormik } from 'formik';
import { TextField, makeStyles, FormGroup, Typography } from '@material-ui/core';
import { PurpleButton, Caption12, RED_500 } from 'admin-library';

import Review from './components/Review';
import SocialLinks from './components/SocialLinks';
import styled from 'styled-components';
import LanguagesTabs from 'components/LanguagesTabs';
import DescriptionEditor from './components/DescriptionEditor';
import TaglineEditor from './components/TaglineEditor';
import { Title, Description } from 'pages/games/components/Game/styles';
import InputLabel from 'components/InputLabel';

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
      descriptions: l10n
        .reduce((acc, item) => ({ ...acc, [String(item.language_id)]: item }), {} as Record<string, L10n>),
        summaries: l10n
        .reduce((acc, item) => ({ ...acc, [String(item.language_id)]: item }), {} as Record<string, L10n>),
      review,
      social_links,
    },
    onSubmit: (values: any) => {
      const { descriptions, summaries, ...rest } = values;
      const newL10nMap = { ...descriptions };

      Object.values(summaries as Record<string, L10n>).forEach(({ language_id, summary }) => {
        newL10nMap[language_id] = newL10nMap[language_id] || { language_id };
        newL10nMap[language_id].summary = summary;
      });

      const gameData = {
        ...rest,
        l10n: Object.values(newL10nMap),
      };

      // onEdit(gameData);
      console.log(gameData);
    },
    validate,
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>{t('game.fields.tagline.label')}</Title>
      <Description>{t('game.fields.tagline.description')}</Description>
      <InputLabel label={t('game.fields.tagline.label')} required />
      <LanguagesTabs 
        value={formik.values.summaries}
        onChange={formik.setFieldValue}
        name="summaries"
        Component={TaglineEditor}
      />
      <Title>{t('game.fields.description.label')}</Title>
      <Description>
        {t('game.fields.description.description_start')}
        <Caption12 color={RED_500}>
          {t('game.fields.description.description_end')}
        </Caption12>
      </Description>
      <InputLabel label={t('game.fields.description.label')} required />
      <LanguagesTabs 
        value={formik.values.descriptions}
        onChange={formik.setFieldValue}
        name="descriptions"
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
          onChange={formik.setFieldValue}
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
