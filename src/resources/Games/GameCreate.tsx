import React from 'react';
import { Create, TabbedForm, FormTab, ReferenceInput, TextInput, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const GameCreate = (props: any) => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Main">
          <TextInput source="name" label="name" />
          <ReferenceInput label="genre" source="genre" reference="genres">
            <SelectInput optionText="id" />
          </ReferenceInput>
        </FormTab>
        <FormTab label="Description">
          <RichTextInput source="description" addLabel={false} />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default GameCreate;
