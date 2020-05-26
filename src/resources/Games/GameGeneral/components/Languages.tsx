import React from 'react';
import { CheckboxGroupInput, translate } from 'react-admin';
import { Typography } from '@material-ui/core';

const choises = [
  { id: 'interface', name: 'resources.games.fields.supportedLanguages.interface' },
  { id: 'audio', name: 'resources.games.fields.supportedLanguages.audio' },
  { id: 'subtitles', name: 'resources.games.fields.supportedLanguages.subtitles' },
];

const Languages = (props: any) => {
  return (
    <>
      <Typography variant="subheading">
        {props.translate('resources.games.fields.supportedLanguages.label')}
      </Typography>
      <CheckboxGroupInput source="eng" choices={choises} />
      <CheckboxGroupInput source="fra" choices={choises} />
      <CheckboxGroupInput source="spn" choices={choises} />
    </>
  );
};

export default translate(Languages);
