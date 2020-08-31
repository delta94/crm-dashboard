import React from 'react';
import styled from 'styled-components/macro';
import ReactQuill from 'react-quill';
import { BLACK_600 } from 'admin-library';
import 'react-quill/dist/quill.snow.css';

import Toolbar from './components/Toolbar';

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const toolbarId = `Toolbar-${Date.now()}`;

const Editor = (props: Props) => {
  const { className, value, onChange } = props;

  const modules = {
    toolbar: {
      container: `#${toolbarId}`,
    },
  };

  return (
    <Wrapper className={`text-editor ${className}`}>
      <Toolbar toolbarId={toolbarId} />
      <ReactQuill modules={modules} onChange={onChange} value={value} />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev.value === next.value;

export default React.memo(Editor, areEqual);

const Wrapper = styled.div`
  .ql-editor {
    height: 260px;
  }

  & .ql-container.ql-snow {
    border: none !important;
  }

  background-color: ${BLACK_600};
  border-radius: 2px;
`;
