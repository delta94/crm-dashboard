import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { L10n } from 'types/games';
import { inputStyles, RED_500 } from 'admin-library';
import { TAGLINE_MAX_LENGTH } from 'const';
import { InputError } from 'pages/games/components/Game/styles';

interface Props {
  className?: string;
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
  language_id: string;
  error?: string;
}

const TaglineEditor = (props: Props) => {
  const { className, value, onChange, name, error } = props;
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const { value: newValue } = e.currentTarget;

    if (newValue.length > TAGLINE_MAX_LENGTH) return;

    onChange(`${name}.summary`, newValue);
  };

  return (
    <>
      <Editor
        className={className}
        value={value.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!error && touched}
      />
      <InputError color={RED_500}>{touched ? error : ''}</InputError>
    </>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TaglineEditor, areEqual);

const Editor = styled.textarea<{ error: boolean }>`
  ${inputStyles}
  resize: none;
  height: 122px;
  padding: 9px 12px;

  ${({ error }) => error && `
    border-bottom: 1px solid ${RED_500};
    margin-bottom: -1px
  `}
`;
