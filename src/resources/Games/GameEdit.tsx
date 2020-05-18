import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Typography } from '@material-ui/core';

const GameTitle = ({ record }: any) => {
  return record ? <Typography variant="title">{record.name}</Typography> : null;
};

const GameEdit = (props: any) => {
  return (
    <Edit title={<GameTitle />} {...props}>
      <SimpleForm>
        <TextInput source="name" label="resources.games.fields.name" />
      </SimpleForm>
    </Edit>
  );
};

export default GameEdit;
