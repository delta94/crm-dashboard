import React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, SelectInput } from 'react-admin';

const UserEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <BooleanInput source="status" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <ReferenceInput source="role" reference="user_role">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
