import React from 'react';
import { BooleanInput, translate, FormDataConsumer } from 'react-admin';
import { Typography, Grid } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

import PlatformsTabs from './PlatformsTabs';

const styles = createStyles({
  marginBottom: {
    marginBottom: 8,
  },
});

const Platforms = (props: any) => {
  const { classes, translate } = props;
  return (
    <>
      <Typography variant="subheading">
        {translate('resources.games.fields.supportedPlatforms.label')}
      </Typography>
      <Typography variant="caption" className={classes.marginBottom}>
        {translate('resources.games.fields.supportedPlatforms.description')}
      </Typography>
      <Grid container spacing={16} className={classes.marginBottom}>
        <Grid xs={2}>
          <BooleanInput
            label="Windows"
            source="platforms.windows"
          />
        </Grid>
        <Grid xs={2}>
          <BooleanInput
            label="MacOS"
            source="platforms.macos"
          />
        </Grid>
        <Grid xs={2}>
          <BooleanInput
            label="Linux"
            source="platforms.linux"
          />
        </Grid>
      </Grid>
      <FormDataConsumer>
        {({ formData }: any) => {
          const platforms: string[] = formData && formData.platforms
            ? Object.keys(formData.platforms)
              .map(platform => formData.platforms[platform] ? platform : '')
              .filter(Boolean)
            : [];

          return <PlatformsTabs platforms={platforms} />;
        }}
      </FormDataConsumer>
    </>
  );
};

export default compose(
  withStyles(styles),
  translate,
)(Platforms);
