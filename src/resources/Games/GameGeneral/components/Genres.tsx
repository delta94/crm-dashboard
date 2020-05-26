import React from 'react';
import { SelectArrayInput, translate } from 'react-admin';
import { Typography } from '@material-ui/core';

const choises = [
  { id: 'action', name: 'Action' },
  { id: 'sport', name: 'Sport game' },
  { id: 'adventure', name: 'Adventure' },
];

const Genres = (props: any) => {
  return (
    <>
      <Typography variant="subheading">
        {props.translate('resources.games.fields.genres.label')}
      </Typography>
      <Typography variant="caption">
        {props.translate('resources.games.fields.genres.description')}
      </Typography>
      <SelectArrayInput
        label="resources.games.fields.genres.rolePlaying"
        source="genres"
        choices={choises}
        fullWidth
      />
    </>
  );
};

export default translate(Genres);
