import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { L10n } from 'types/games';
import { inputStyles } from 'admin-library';
import { TAGLINE_MAX_LENGTH } from 'const';

interface Props {
  className?: string;
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
  language_id: string;
}

const TaglineEditor = (props: Props) => {
  const { className, value, onChange, name } = props;
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
      />
    </>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TaglineEditor, areEqual);

const Editor = styled.textarea`
  ${inputStyles}
  display: block;
  resize: none;
  height: 122px;
  padding: 9px 12px;
`;
