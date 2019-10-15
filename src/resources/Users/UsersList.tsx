import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';
import { AvatarField } from 'components';

const UsersList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <BooleanField source="status" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="role" />
      <AvatarField source="picture" title="avatar" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

export default UsersList;
