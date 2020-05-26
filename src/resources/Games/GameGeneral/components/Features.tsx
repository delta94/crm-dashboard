import React from 'react';
import { CheckboxGroupInput, translate } from 'react-admin';
import { Typography } from '@material-ui/core';

const playerFeatures = [
  { id: 'singlePlayer', name: 'resources.games.fields.featuresSupported.singlePlayer' },
  { id: 'multiPlayer', name: 'resources.games.fields.featuresSupported.multiPlayer' },
  { id: 'onlineMultiPlayer', name: 'resources.games.fields.featuresSupported.onlineMultiPlayer' },
  { id: 'localMultiPlayer', name: 'resources.games.fields.featuresSupported.localMultiPlayer' },
  { id: 'splitScreen', name: 'resources.games.fields.featuresSupported.splitScreen' },
  { id: 'mmo', name: 'resources.games.fields.featuresSupported.mmo' },
  { id: 'coop', name: 'resources.games.fields.featuresSupported.coop' },
  { id: 'onlineCoop', name: 'resources.games.fields.featuresSupported.onlineCoop' },
  { id: 'localCoop', name: 'resources.games.fields.featuresSupported.localCoop' },
  { id: 'crossPlarform', name: 'resources.games.fields.featuresSupported.crossPlarform' },
];

const platformFeatures = [
  { id: 'achievements', name: 'resources.games.fields.featuresSupported.achievements' },
  { id: 'cloudSaves', name: 'resources.games.fields.featuresSupported.cloudSaves' },
];

const Features = (props: any) => {
  return (
    <>
      <Typography variant="subheading">
        {props.translate('resources.games.fields.featuresSupported.label')}
      </Typography>
      <Typography variant="caption">
        {props.translate('resources.games.fields.featuresSupported.description')}
      </Typography>
      <CheckboxGroupInput
        label="resources.games.fields.featuresSupported.numberPlayers"
        source="players"
        choices={playerFeatures}
      />
      <CheckboxGroupInput
        label="resources.games.fields.featuresSupported.platformFeatures"
        source="players"
        choices={platformFeatures}
      />
    </>
  );
};

export default translate(Features);
