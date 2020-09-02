import React, { SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Game, SystemRequirements as SystemRequirementsType } from 'types/games';
import { useFormik } from 'formik';
import { Input, Caption12, RED_500, Grid, PurpleButton, Switch } from 'admin-library';
import InputLabel from 'components/InputLabel';
import InputError from 'components/InputError';

import Languages from './components/Languages';
import Genres from './components/Genres';
import Tags from './components/Tags';
import SystemRequirements from './components/SystemRequirements';
import { Title, Description } from '../../../../styles';
import Features from './components/Features';
import validate from './validate';

const { Row, Col } = Grid;

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const transformRequirements = (requirements: any) => {
  const { ram, disk_space, diskSpaceUnit = 1, directX: _directX, ...rest } = requirements;

  return {
    ...rest,
    ...(disk_space && { disk_space: disk_space * diskSpaceUnit.value }),
    ram: +ram,
  };
};

const General = (props: Props) => {
  const { game, onEdit } = props;
  const { revision, title, type } = game;
  const {
    developers,
    publishers,
    localization = [],
    genres = [],
    tags = [],
    release_date,
    features = [],
    system_requirements = [],
    platforms = [],
    release_date_count_down,
  } = revision;
  const { t } = useTranslation();
  const requirements = system_requirements
    ?.reduce((acc: Record<string, SystemRequirementsType>, item) => {
      acc[item.platform] = item;

      return acc;
    }, {});

  const initialValues = {
    title,
    type,
    developers,
    publishers,
    localization: localization || [],
    genres: genres.map(({ id }) => id),
    tags: tags.map(({ id }) => id),
    release_date: release_date && release_date.slice(0, 10),
    features: features.map(({ id }) => id),
    requirements,
    platforms,
    release_date_count_down,
  };

  const formik = useFormik({
    initialValues,
    initialErrors: validate(initialValues),
    onSubmit: (values: any) => {
      const { release_date, requirements: requirementsMap, ...rest } = values;
      const releaseDateISO = release_date 
        ? new Date(release_date.slice(0, 10)).toISOString() 
        : release_date;

      const gameData = {
        ...rest,
        release_date: releaseDateISO,
        system_requirements: Object.keys(requirementsMap).map(platform => {
          const { minimal, recommended } = requirementsMap[platform];

          return {
            platform,
            minimal: transformRequirements(minimal),
            recommended: transformRequirements(recommended),
          };
        }),
      };

      onEdit(gameData);
    },
    validate,
  });

  const handleReleaseDateBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    
    const newDateTime = new Date(e.currentTarget.value).getTime();
    
    if (newDateTime < Date.now()) {
      const tomorrow = new Date(Date.now() + (24 * 60 * 60 * 1000));
      const tomorrowDateString = tomorrow.toISOString().slice(0, 10);
      formik.setFieldValue('release_date', tomorrowDateString);
    }
  };

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Title>{t('game.general.title')}</Title>
      <Description>
        {t('game.general.description_start')}
        <Caption12 color={RED_500}>*</Caption12>
        {t('game.general.description_end')}
      </Description>
      <Row gap="24px">
        <Col xs={6}>
          <FormGroup>
            <InputLabel label={t('game.fields.title')} required />
            <Input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={!!formik.errors.title && formik.touched.title}
              onBlur={formik.handleBlur}
            />
            <InputError error={formik.touched.title && formik.errors.title} />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <InputLabel label={t('game.fields.developers.label')} required />
            <Input
              name="developers"
              value={formik.values.developers}
              onChange={formik.handleChange}
              error={!!formik.errors.developers && formik.touched.developers}
              onBlur={formik.handleBlur}
            />
            <InputError error={formik.touched.developers && formik.errors.developers} />
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup>
            <InputLabel label={t('game.fields.publishers.label')} required />
            <Input
              name="publishers"
              value={formik.values.publishers}
              onChange={formik.handleChange}
              error={!!formik.errors.publishers && formik.touched.publishers}
              onBlur={formik.handleBlur}
            />
            <InputError error={formik.touched.publishers && formik.errors.publishers} />
          </FormGroup>
        </Col>
        <Col xs={6} />
      </Row>
      <Title>{t('game.fields.releaseDate.label')}</Title>
      <Description>
        {t('game.fields.releaseDate.description')}
      </Description>
      <Row gap="24px">
        <Col xs={6}>
          <FormGroup>
            <InputLabel label={t('game.fields.releaseDate.label')} required />
            <Input
              name="release_date"
              value={formik.values.release_date}
              onChange={formik.handleChange}
              type="date"
              error={!!formik.errors.release_date && formik.touched.release_date}
              onBlur={handleReleaseDateBlur}
            />
            <InputError error={formik.touched.release_date && formik.errors.release_date} />
          </FormGroup>
        </Col>
        <Col xs={6} />
      </Row>
      <Switch 
        name="release_date_count_down"
        checked={formik.values.release_date_count_down}
        onChange={formik.handleChange}
      />
      <DisplayTime>{t('game.fields.releaseDate.display_time')}</DisplayTime>
      <Genres value={formik.values.genres} onChange={formik.setFieldValue} />
      <Tags value={formik.values.tags} onChange={formik.setFieldValue} />
      <Languages value={formik.values.localization} onChange={formik.setFieldValue} />
      <Features value={formik.values.features} onChange={formik.setFieldValue} />
      <SystemRequirements formik={formik} />
      <SaveButton type="submit" disabled={!formik.isValid}>
        {t('save_changes')}
      </SaveButton>
    </Wrapper>
  );
};

export default React.memo(General);

const Wrapper = styled.form``;

const DisplayTime = styled(Caption12)`
  display: inline-block;
  margin-left: 8px;
`;

const SaveButton = styled(PurpleButton)`
  margin-top: 16px;
`;

const FormGroup = styled.div`
  min-height: 82px;
`;
