import React from 'react';
import styled from 'styled-components/macro';
import ReactQuill from 'react-quill';
import { BLACK_600, RED_500 } from 'admin-library';
import 'react-quill/dist/quill.snow.css';

import Toolbar from './components/Toolbar';

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
}

const toolbarId = `Toolbar-${Date.now()}`;

const Editor = (props: Props) => {
  const { className, value, onChange, onBlur, error = false } = props;

  const modules = {
    toolbar: {
      container: `#${toolbarId}`,
    },
  };

  return (
    <Wrapper className={`text-editor ${className}`} error={error}>
      <Toolbar toolbarId={toolbarId} />
      <ReactQuill modules={modules} onChange={onChange} value={value} onBlur={onBlur}/>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => 
  prev.value === next.value &&
  prev.error === next.error;

export default React.memo(Editor, areEqual);

const Wrapper = styled.div<{ error: boolean }>`
  .ql-editor {
    height: 260px;
  }

  & .ql-container.ql-snow {
    border: none !important;
  }

  background-color: ${BLACK_600};
  border-radius: 2px;

  ${({ error }) => error && `
    border-bottom: 1px solid ${RED_500};
    margin-bottom: -1px
  `}
`;
