import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';

const UsersList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <BooleanField source="status" />
      <TextField source="first_name" />
      <TextField source="tenant_id" />
      <TextField source="role" />
      <TextField source="picture" />
      <TextField source="last_name" />
      <DateField source="created_at" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

export default UsersList;
