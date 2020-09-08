import React, { ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import { Modal } from 'admin-library';

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup = (props: Props) => {
  const { className, open, onClose, children } = props;

  const handleStopPrapagation = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Modal>
      <Wrapper open={open} className={className} onClick={onClose}>
        <Content onClick={handleStopPrapagation}>
          {children}
        </Content>
      </Wrapper>
    </Modal>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Popup, areEqual);

const Wrapper = styled.div<{ open: boolean }>`
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const Content = styled.div`
  margin: auto;
`;
