import React from 'react';
import styled from 'styled-components';
import { L10n } from 'types/games';

interface Props {
  className?: string;
  value: L10n[];
}

const Tagline = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Tagline, areEqual);

const Wrapper = styled.div`
  
`;
