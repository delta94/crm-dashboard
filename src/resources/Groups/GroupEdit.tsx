import React from 'react';
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput } from 'react-admin';
import { Typography } from '@material-ui/core';

const GroupTitle = ({ record }: any) => {
  return record ? <Typography variant="title">{record.name}</Typography> : null;
};

const GroupEdit = (props: any) => {
  return (
    <Edit title={<GroupTitle />} {...props}>
      <SimpleForm>
        <TextInput source="name" label="resources.groups.fields.name" />
        <ReferenceInput label="resources.groups.fields.role" source="role" reference="group_role">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default GroupEdit;
