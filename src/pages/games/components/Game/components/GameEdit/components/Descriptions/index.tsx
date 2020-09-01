import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Game, L10n, SocialLink } from 'types/games';
import { useFormik } from 'formik';
import { PurpleButton, Caption12, RED_500 } from 'admin-library';
import { TAGLINE_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from 'const';
import LanguagesTabs from 'components/LanguagesTabs';
import { Title, Description } from 'pages/games/components/Game/styles';
import InputLabel from 'components/InputLabel';

import Review from './components/Review';
import ExternalLinks from './components/ExternalLinks';
import DescriptionEditor from './components/DescriptionEditor';
import TaglineEditor from './components/TaglineEditor';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Descriptions = (props: Props) => {
  const { game, onEdit } = props;
  const { revision } = game;
  const {
    l10n = [],
    review = [],
    social_links = [],
  } = revision;
  const { t } = useTranslation();

  const initialValues = {
    descriptions: l10n
      .reduce((acc, item) => ({ ...acc, [String(item.language_id)]: item }), {} as Record<string, L10n>),
    summaries: l10n
      .reduce((acc, item) => ({ ...acc, [String(item.language_id)]: item }), {} as Record<string, L10n>),
    review,
    socialLinksMap: social_links
      .reduce((acc, item) => ({ ...acc, [item.type]: item }), {} as Record<string, SocialLink>),
  };

  const formik = useFormik<typeof initialValues>({
    initialValues,
    onSubmit: (values: any) => {
      const { descriptions, summaries, socialLinksMap, ...rest } = values;
      const newL10nMap = { ...descriptions };

      Object.values(summaries as Record<string, L10n>).forEach(({ language_id, summary }) => {
        newL10nMap[language_id] = newL10nMap[language_id] || { language_id };
        newL10nMap[language_id].summary = summary;
      });

      const gameData = {
        ...rest,
        social_links: Object.values(socialLinksMap),
        l10n: Object.values(newL10nMap),
      };

      onEdit(gameData);
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>{t('game.fields.tagline.label')}</Title>
      <Description>{t('game.fields.tagline.description', { limit: TAGLINE_MAX_LENGTH })}</Description>
      <InputLabel label={t('game.fields.tagline.label')} required />
      <LanguagesTabs
        value={formik.values.summaries}
        onChange={formik.setFieldValue}
        name="summaries"
      >
        {Object.keys(formik.values.summaries).map(key => (
          <TaglineEditor
            key={key}
            language_id={key}
            value={formik.values.summaries[key]}
            onChange={formik.setFieldValue}
            name={`summaries[${key}]`}
          />
        ))}
      </LanguagesTabs>
      <Title>{t('game.fields.description.label')}</Title>
      <Description>
        {t('game.fields.description.description_start', { limit: DESCRIPTION_MAX_LENGTH })}
        <Caption12 color={RED_500}>
          {t('game.fields.description.description_end')}
        </Caption12>
      </Description>
      <InputLabel label={t('game.fields.description.label')} required />
      <LanguagesTabs
        value={formik.values.descriptions}
        onChange={formik.setFieldValue}
        name="descriptions"
      >
        {Object.keys(formik.values.descriptions).map(key => (
          <DescriptionEditor
            key={key}
            language_id={key}
            value={formik.values.descriptions[key]}
            onChange={formik.setFieldValue}
            name={`descriptions[${key}]`}
          />
        ))}
      </LanguagesTabs>
      <Review
        value={formik.values.review}
        onChange={formik.setFieldValue}
      />
      <ExternalLinks
        value={formik.values.socialLinksMap}
        onChange={formik.setFieldValue}
      />
      <SaveButton type="submit">
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
