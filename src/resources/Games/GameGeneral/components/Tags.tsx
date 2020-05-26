import React from 'react';
import { ArrayInput, SimpleFormIterator, TextInput, translate } from 'react-admin';
import { Typography } from '@material-ui/core';

const Tags = (props: any) => (
  <>
    <Typography variant="subheading">
      {props.translate('resources.games.fields.tags.label')}
    </Typography>
    <Typography variant="caption">
      {props.translate('resources.games.fields.tags.description')}
    </Typography>
    <ArrayInput source="tags">
      <SimpleFormIterator>
        <TextInput source="tag" />
      </SimpleFormIterator>
    </ArrayInput>
  </>
);

export default translate(Tags);
