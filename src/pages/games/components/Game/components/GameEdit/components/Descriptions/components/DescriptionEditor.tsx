import React from 'react';
import { L10n } from 'types/games';
import Editor from 'components/Editor';

interface Props {
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
}

const DescriptionEditor = (props: Props) => {
  const { value, onChange, name } = props;

  const handleChange = (newValue: string) => {
    onChange(`${name}.description`, newValue);
  };

  return (
    <Editor value={value.description || ''} onChange={handleChange} />
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DescriptionEditor, areEqual);
