import React from 'react';
import { Create, SimpleForm, ReferenceInput, TextInput, SelectInput, translate } from 'react-admin';
import { TranslationContextProps } from 'ra-core';

const GroupCreate = (props: TranslationContextProps) => {
  const { translate } = props;
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" label={translate('resources.groups.fields.name')} />
        <ReferenceInput label={translate('resources.groups.fields.role')} source="role" reference="group_role">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default translate(GroupCreate);
