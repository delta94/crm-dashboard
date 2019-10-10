import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const GroupList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="role" />
    </Datagrid>
  </List>
);
