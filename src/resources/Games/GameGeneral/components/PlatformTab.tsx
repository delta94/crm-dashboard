import React from 'react';
import { SelectInput, TextInput } from 'react-admin';
import { TranslationContextProps, translate } from 'ra-core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core/';
import { capitalize } from 'helpers';

interface Props {
  type: 'recommended' | 'minimal';
  platform: string;
}

const PlatformTab = (props: Props & TranslationContextProps) => {
  const { type, platform, translate } = props;
  const title = type === 'recommended'
    ? translate('resources.games.fields.supportedPlatforms.recommended')
    : `${capitalize(platform)} ${translate('resources.games.fields.supportedPlatforms.minimal')}`;

  return (
    <>
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
    </>
  );
};

export default translate<any>(PlatformTab);
