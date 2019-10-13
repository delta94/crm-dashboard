import React from 'react';
import { Create, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';

const GroupCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" label="resources.groups.fields.name" />
        <ReferenceInput label="resources.groups.fields.role" source="role" reference="group_role">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default GroupCreate;
