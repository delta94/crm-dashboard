import React from 'react';
import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput, translate } from 'react-admin';
import { TranslationContextProps } from 'ra-core';
import { Typography } from '@material-ui/core';

const GroupTitle = ({ record }: any) => {
  return record ? <Typography variant="title">{record.name}</Typography> : null;
};

const GroupEdit = (props: TranslationContextProps) => {
  const { translate } = props;
  return (
    <Edit title={<GroupTitle />} {...props}>
      <SimpleForm>
        <TextInput source="name" label={translate('resources.groups.fields.name')} />
        <ReferenceInput label={translate('resources.groups.fields.role')} source="role" reference="group_role">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default translate(GroupEdit);
