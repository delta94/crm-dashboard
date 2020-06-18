import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, SystemRequirements as SystemRequirementsType } from 'types/games';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  makeStyles,
  FormGroup,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import Developers from './components/Developers';
import Publishers from './components/Publishers';
import Languages from './components/Languages';
import Genres from './components/Genres';
import Tags from './components/Tags';
import ReleaseDate from './components/ReleaseDate';
import Features from './components/Features';
import SystemRequirements from './components/SystemRequirements';
import { gameTypes } from 'pages/games/const';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
  },
});

const transformRequirements = (requirements: any) => {
  const { disk_space, ram, diskSpaceUnit = 1, ramUnit = 1, ...rest } = requirements;

  return {
    ...rest,
    ...(disk_space && { disk_space: disk_space * diskSpaceUnit }),
    ...(ram && { ram: ram * ramUnit }),
  };
};

const General = (props: Props) => {
  const { game, onEdit } = props;
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
  const classes = useStyles();
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
      release_date,
      features: features.map(({ id }) => id),
      requirements,
      platforms,
    },
    onSubmit: (values: any) => {
      const { release_date, requirements: requirementsMap, ...rest } = values;
      const releaseDateISO = release_date ? new Date(release_date).toISOString() : release_date;

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
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className={classes.field} variant="h6">
        {t('games.description')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {`${t('games.fields.title')} *`}
      </Typography>
      <FormGroup className={classes.field}>
        <TextField
          name="title"
          label={t('games.fields.title')}
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <Typography variant="h6" gutterBottom>
        {`${t('games.fields.slug')} *`}
      </Typography>
      <FormGroup className={classes.field}>
        <TextField
          name="slug"
          label={t('games.fields.slug')}
          variant="outlined"
          value={formik.values.slug}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <Typography variant="h6" gutterBottom>
        {`${t('games.fields.type')} *`}
      </Typography>
      <FormGroup className={classes.field}>
        <FormControl variant="outlined">
          <InputLabel>{t('games.fields.type')}</InputLabel>
          <Select
            value={formik.values.type}
            onChange={formik.handleChange}
            name="type"
            label={t('games.fields.type')}
          >
            {gameTypes.map(type => (
              <MenuItem value={type} key={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup className={classes.field}>
        <Developers
          value={formik.values.developers}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Publishers
          value={formik.values.publishers}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Languages
          value={formik.values.localization}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Genres
          value={formik.values.genres}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Tags
          value={formik.values.tags}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <ReleaseDate
          value={formik.values.release_date}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <Features
          value={formik.values.features}
          onChange={formik.handleChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
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
