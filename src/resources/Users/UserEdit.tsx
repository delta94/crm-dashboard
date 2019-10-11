import React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput, DateInput } from 'react-admin';

const UserEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <BooleanInput source="status" />
      <TextInput source="first_name" />
      <TextInput optionText="id" />
      <TextInput source="role" />
      <TextInput source="picture" />
      <TextInput source="last_name" />
      <DateInput source="created_at" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
