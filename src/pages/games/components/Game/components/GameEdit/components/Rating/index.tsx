import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, Rating as RatingType } from 'types/games';
import { useFormik } from 'formik';
import {
  Button,
  makeStyles,
  FormGroup,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@material-ui/core';

import agencies from './agencies';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
  },
  select: {
    width: 160,
  },
});

const Rating = (props: Props) => {
  const { game, onEdit } = props;
  const { revision } = game;
  const { rating = [] } = revision;
  const classes = useStyles();
  const { t } = useTranslation();
  const ratingMap = rating.reduce((acc: Record<string, RatingType>, item) => {
    acc[item.agency] = {
      display_online_notice: false,
      show_age_restrict: false,
      ...item,
    };

    return acc;
  }, {});

  const formik = useFormik({
    initialValues: { rating: ratingMap },
    onSubmit: (values: any) => {
      const ratingMap = values.rating;
      const gameData = {
        rating: Object.keys(ratingMap).map(agency => ({
          ...ratingMap[agency],
          agency,
        })),
      };

      onEdit(gameData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className={classes.field} variant="h6" color="error">
        {t('games.fields.rating.warning')}
      </Typography>
      <Grid container>
        {agencies.map(({ name, labels }) => (
          <Grid item sm={6} key={name} className={classes.field}>
            <Typography variant="h6">
              {name}
            </Typography>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel>{t('games.fields.rating.label')}</InputLabel>
              <Select
                value={formik.values.rating[name]?.rating}
                onChange={formik.handleChange}
                name={`rating.${name}.rating`}
                className={classes.field}
                label={t('games.fields.rating.label')}
              >
                {labels.map(age => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormGroup>
              <FormControlLabel
                label={t('games.fields.rating.displayOnlineNotice')}
                control={
                  <Checkbox
                    checked={formik.values.rating[name]?.display_online_notice}
                    onChange={formik.handleChange}
                    name={`rating.${name}.display_online_notice`}
                    color="primary"
                  />
                }
              />
              <FormControlLabel
                label={t('games.fields.rating.showAgeRestrict')}
                control={
                  <Checkbox
                    checked={formik.values.rating[name]?.show_age_restrict}
                    onChange={formik.handleChange}
                    name={`rating.${name}.show_age_restrict`}
                    color="primary"
                  />
                }
              />
            </FormGroup>
          </Grid>
        ))}
      </Grid>
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

export default React.memo(Rating);
