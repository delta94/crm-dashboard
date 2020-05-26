import React from 'react';
import { SimpleForm, TextInput, DateInput, translate } from 'react-admin';

import Languages from './components/Languages';
import Genres from './components/Genres';
import Tags from './components/Tags';
import Features from './components/Features';
import Controllers from './components/Controllers';
import Platforms from './components/Platforms';

const GameGeneral = (props: any) => {
  const { translate } = props;
  return (
    <SimpleForm redirect="list">
      <TextInput source="title" label="resources.games.fields.title" fullWidth />
      <TextInput
        source="developers"
        label="resources.games.fields.developers.label"
        helperText={translate('resources.games.fields.developers.description')}
        fullWidth
      />
      <TextInput
        source="publishers"
        label="resources.games.fields.publishers.label"
        helperText={translate('resources.games.fields.publishers.description')}
        fullWidth
      />
      <Languages />
      <Genres />
      <Tags />
      <DateInput
        source="releaseDate"
        label="resources.games.fields.releaseDate.label"
        helperText={translate('resources.games.fields.releaseDate.description')}
      />
      <Features />
      <Controllers />
      <Platforms />
    </SimpleForm>
  );
};

export default translate(GameGeneral);
