import React from 'react';
import { Create, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';

const InviteCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="email" label="resources.invites.fields.email" />
        <ReferenceInput label="resources.invites.fields.group" source="group_id" reference="groups">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default InviteCreate;
