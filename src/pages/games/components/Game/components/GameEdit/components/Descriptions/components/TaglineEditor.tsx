import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { L10n } from 'types/games';
import { inputStyles } from 'admin-library';

interface Props {
  className?: string;
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
}

const TaglineEditor = (props: Props) => {
  const { className, value, onChange, name } = props;

  const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const { value: newValue } = e.currentTarget;
    onChange(`${name}.summary`, newValue);
  };

  return (
    <Editor className={className} value={value.summary} onChange={handleChange} />
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(TaglineEditor, areEqual);

const Editor = styled.textarea`
  ${inputStyles}
  resize: none;
  height: 122px;
  padding: 9px 12px;
`;
