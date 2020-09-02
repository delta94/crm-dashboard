import React, { useState } from 'react';
import { L10n } from 'types/games';
import Editor from 'components/Editor';
import { DESCRIPTION_MAX_LENGTH } from 'const';
import { RED_500 } from 'admin-library';
import { InputError } from 'pages/games/components/Game/styles';

interface Props {
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
  error?: string;
  language_id: string;
}

const DescriptionEditor = (props: Props) => {
  const { value, onChange, name, error } = props;
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
        error={!!error && touched}
        onBlur={handleBlur}
      />
      <InputError color={RED_500}>{touched ? error : ''}</InputError>
    </>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DescriptionEditor, areEqual);
