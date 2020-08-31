import React from 'react';
import styled from 'styled-components';
import { L10n } from 'types/games';
import Editor from 'components/Editor';

interface Props {
  className?: string;
  value: L10n;
  onChange: (name: string, value: any) => void;
  name: string;
}

const DescriptionEditor = (props: Props) => {
  const { className, value, onChange, name } = props;

  const handleChange = (newValue: string) => {
    onChange(`${name}.description`, newValue);
  };

  return (
    <Wrapper className={className}>
      <Editor value={value.description || ''} onChange={handleChange} />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DescriptionEditor, areEqual);

const Wrapper = styled.div``;
