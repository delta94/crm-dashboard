import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const GroupList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="role" />
    </Datagrid>
  </List>
);

export default GroupList;
