import React from 'react';
import styled from 'styled-components/macro';
import { PURPLE_500, BLACK_600, GRAY_100, BLACK_700 } from 'admin-library';

interface Props {
  className?: string;
  toolbarId: string;
}

const Toolbar = (props: Props) => {
  const { className, toolbarId } = props;

  return (
    <Wrapper className={className} id={toolbarId}>
      <span className="ql-formats">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-link"></button>
      </span>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Toolbar, areEqual);

const Wrapper = styled.div`
  background-color: ${BLACK_600};
  border: none !important;
  border-bottom: 2px solid ${BLACK_700} !important;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;

  .ql-stroke {
    stroke: ${GRAY_100} !important;
  }

  button:hover {
    .ql-stroke {
      stroke: ${PURPLE_500} !important;
    }
    .ql-fill {
      fill: ${PURPLE_500} !important;
    }
  }

  .ql-fill {
    fill: ${GRAY_100} !important;
  }

  .ql-active .ql-stroke {
    stroke: ${PURPLE_500} !important;
  }

  .ql-active .ql-fill {
    fill: ${PURPLE_500} !important;
  }
`;
