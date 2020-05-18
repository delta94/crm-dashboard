import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const GameCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" label="resources.games.fields.name" />
      </SimpleForm>
    </Create>
  );
};

export default GameCreate;
