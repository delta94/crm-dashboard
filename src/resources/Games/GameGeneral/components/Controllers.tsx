import React from 'react';
import { RadioButtonGroupInput, translate } from 'react-admin';

const choises = [
  { id: 'notSupported' },
  { id: 'partiallySupported' },
  { id: 'fullSupport' },
];

const Controllers = () => (
  <RadioButtonGroupInput source="controllers" choices={choises} optionText={<ControllerField />} />
);

export default Controllers;

const ControllerField = translate((props: any) => {
  const { record: { id }, translate } = props;
  return (
    <>
      <h5>{translate(`resources.games.fields.controllers.${id}.label`)}</h5>
      <span>{translate(`resources.games.fields.controllers.${id}.description`)}</span>
    </>
  );
});
