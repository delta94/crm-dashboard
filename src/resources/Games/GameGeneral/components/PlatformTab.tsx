import React from 'react';
import { SelectInput, TextInput } from 'react-admin';
import { translate } from 'ra-core';
import { Typography, Paper, Grid } from '@material-ui/core';
import { capitalize } from 'helpers';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

const styles = createStyles({
  root: {
    padding: 12,
  },
});

const PlatformTab = (props: any) => {
  const { type, platform, translate, classes } = props;
  const title = type === 'recommended'
    ? translate('resources.games.fields.supportedPlatforms.recommended')
    : `${capitalize(platform)} ${translate('resources.games.fields.supportedPlatforms.minimal')}`;

  return (
    <Paper className={classes.root}>
      <Typography variant="subheading">
        {title}
      </Typography>

      <TextInput
        label="resources.games.fields.supportedPlatforms.system"
        source={`platforms.${platform}.${type}.system`}
        fullWidth
      />
      <TextInput
        label="resources.games.fields.supportedPlatforms.processor"
        source={`platforms.${platform}.${type}.processor`}
        fullWidth
      />
      <Grid container justify="space-between">
        <Grid xs={7}>
          <TextInput
            label="resources.games.fields.supportedPlatforms.graphics"
            source={`platforms.${platform}.${type}.graphics`}
            fullWidth
          />
        </Grid>
        <Grid xs={4}>
          <SelectInput
            label="resources.games.fields.supportedPlatforms.directX"
            source={`platforms.${platform}.${type}.directX`} choices={[
              { id: '10', name: '10' },
              { id: '11', name: '11' },
              { id: '12', name: '12' },
            ]}
          />
        </Grid>
      </Grid>
      <TextInput
        label="resources.games.fields.supportedPlatforms.sound"
        source={`platforms.${platform}.${type}.sound`}
        fullWidth
      />
      <Grid container justify="space-between">
        <Grid xs={7}>
          <TextInput
            label="resources.games.fields.supportedPlatforms.memory"
            source={`platforms.${platform}.${type}.memory`}
            fullWidth
          />
        </Grid>
        <Grid xs={4}>
          <SelectInput
            label="unit"
            source={`platforms.${platform}.${type}.memoryUnit`} choices={[
              { id: 'Mb', name: 'Mb' },
              { id: 'Gb', name: 'Gb' },
            ]}
          />
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid xs={7}>
          <TextInput
            label="resources.games.fields.supportedPlatforms.storage"
            source={`platforms.${platform}.${type}.storage`}
            fullWidth
          />
        </Grid>
        <Grid xs={4}>
          <SelectInput
            label="unit"
            source={`platforms.${platform}.${type}.storageUnit`} choices={[
              { id: 'Mb', name: 'Mb' },
              { id: 'Gb', name: 'Gb' },
            ]}
          />
        </Grid>
      </Grid>
      <TextInput
        label="resources.games.fields.supportedPlatforms.other"
        source={`platforms.${platform}.${type}.other`}
        fullWidth
      />
    </Paper>
  );
};

export default compose<any, any>(
  withStyles(styles),
  translate,
)(PlatformTab);
