import React from 'react';
import { BooleanInput, translate, FormDataConsumer } from 'react-admin';
import { Typography, Grid } from '@material-ui/core';

import PlatformsTabs from './PlatformsTabs';

const Platforms = (props: any) => {
  return (
    <>
      <Typography variant="subheading">
        {props.translate('resources.games.fields.supportedPlatforms.label')}
      </Typography>
      <Typography variant="caption">
        {props.translate('resources.games.fields.supportedPlatforms.description')}
      </Typography>
      <Grid container spacing={16}>
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
          const platforms: string[] = formData.platforms
            ? Object.keys(formData.platforms)
              .map(platform => formData.platforms[platform] ? platform : '')
              .filter(Boolean)
            : [];
          console.log(formData);
          return <PlatformsTabs platforms={platforms} />;
        }}
      </FormDataConsumer>
    </>
  );
};

export default translate(Platforms);
