import React from 'react';
import styled from 'styled-components/macro';
import { BLACK_700, GRAY_100, WHITE, RED_500, DeleteIcon } from 'admin-library';

interface Props {
  className?: string;
  imageSrc: string;
  onDelete: () => void;
}

const ImagePreview = (props: Props) => {
  const { className, imageSrc, onDelete } = props;

  return (
    <Wrapper className={className} imageSrc={imageSrc} onClick={onDelete}>
      <DeleteImage>
        <DeleteIcon />
      </DeleteImage>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ImagePreview, areEqual);

const Wrapper = styled.div<{ imageSrc?: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: center / contain no-repeat url(${({ imageSrc }) => imageSrc});
`;

const DeleteImage = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background-color: ${BLACK_700};
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  path {
    fill: ${GRAY_100};
    transition: fill 0.15s ease-in-out;
  }

  :hover {
    path {
      fill: ${WHITE};
    }

    background-color: ${RED_500};
  }

  :active {
    opacity: 0.8;
  }
`;
