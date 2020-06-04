import React from 'react';
import { Create, TextInput, SimpleForm, SelectInput } from 'react-admin';

const GameCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="title" />
        <TextInput source="slug" />
        <SelectInput source="type" choices={[
          { id: 'desktop', name: 'desktop' },
          { id: 'web', name: 'web' },
        ]} />
      </SimpleForm>
    </Create>
  );
};

export default React.memo(GameCreate);
