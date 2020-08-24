import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Game, SystemRequirements as SystemRequirementsType } from 'types/games';
import { useFormik } from 'formik';
import {
  Button,
} from '@material-ui/core';
import { GRAY_100, Input, Caption12, RED_500, Grid } from 'admin-library';

import Languages from './components/Languages';
import Genres from './components/Genres';
import Tags from './components/Tags';
import SystemRequirements from './components/SystemRequirements';
import { Title, Description } from '../../../../styles';
import InputLabel from '../InputLabel';
import Features from './components/Features';

const { Row, Col } = Grid;

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const transformRequirements = (requirements: any) => {
  const { disk_space, ram, diskSpaceUnit = 1, ramUnit = 1, ...rest } = requirements;

  return {
    ...rest,
    ...(disk_space && { disk_space: disk_space * diskSpaceUnit }),
    ...(ram && { ram: ram * ramUnit }),
  };
};

const General = (props: Props) => {
  const { game } = props;
  const { revision, title, slug, type } = game;
  const {
    developers = [],
    publishers = [],
    localization = [],
    genres = [],
    tags = [],
    release_date,
    features = [],
    system_requirements = [],
    platforms = [],
  } = revision;
  const { t } = useTranslation();
  const requirements = system_requirements
    ?.reduce((acc: Record<string, SystemRequirementsType>, item) => {
      acc[item.platform] = item;

      return acc;
    }, {});

  const formik = useFormik({
    initialValues: {
      title,
      slug,
      type,
      developers: developers.map(({ id }) => id),
      publishers: publishers.map(({ id }) => id),
      localization: localization || [],
      genres: genres.map(({ id }) => id),
      tags: tags.map(({ id }) => id),
      release_date: release_date && release_date.slice(0, 10),
      features: features.map(({ id }) => id),
      requirements,
      platforms,
    },
    onSubmit: (values: any) => {
      const { release_date, requirements: requirementsMap, ...rest } = values;
      const releaseDateISO = release_date ? new Date(release_date.slice(0, 10)).toISOString() : release_date;

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

      // onEdit(gameData);
      console.log(gameData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Title>{t('game.general.title')}</Title>
      <Description color={GRAY_100}>
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
            />
          </FormGroup>
        </Col>
        <Col xs={6} />
      </Row>
      <Title>{t('game.fields.releaseDate.label')}</Title>
      <Description color={GRAY_100}>
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
            />
          </FormGroup>
        </Col>
        <Col xs={6} />
      </Row>
      <DisplayTime>{t('game.fields.releaseDate.display_time')}</DisplayTime>
      <Genres value={formik.values.genres} onChange={formik.setFieldValue} />
      <Tags value={formik.values.tags} onChange={formik.setFieldValue} />
      <Languages value={formik.values.localization} onChange={formik.setFieldValue} />
      <Features value={formik.values.features} onChange={formik.setFieldValue} />
      <FormGroup>
        <SystemRequirements
          requirementsValue={formik.values.requirements}
          platformsValue={formik.values.platforms}
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

export default React.memo(General);

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const DisplayTime = styled(Caption12)`
  display: inline-block;
  margin-left: 8px;
`;
