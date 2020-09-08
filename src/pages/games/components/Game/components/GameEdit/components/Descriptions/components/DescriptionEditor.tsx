import React, { useState } from 'react';
import { L10n } from 'types/games';
import Editor from 'components/Editor';
import { DESCRIPTION_MAX_LENGTH } from 'const';

interface Props {
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
  language_id: string;
}

const DescriptionEditor = (props: Props) => {
  const { value, onChange, name } = props;
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const handleChange = (newValue: string) => {
    if (newValue.length > DESCRIPTION_MAX_LENGTH) return;

    onChange(`${name}.description`, newValue);
  };

  return (
    <>
      <Editor
        value={value.description || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DescriptionEditor, areEqual);
