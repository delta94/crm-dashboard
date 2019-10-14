import React from 'react';
import { BooleanField, List, Datagrid, EmailField, TextField, ReferenceField } from 'react-admin';

const InviteList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <EmailField source="email" />
      <ReferenceField label="resources.invites.fields.group" source="group_id" reference="groups">
        <TextField source="name" />
      </ReferenceField>
      <BooleanField
        source="accepted"
      />
    </Datagrid>
  </List>
);

export default InviteList;
