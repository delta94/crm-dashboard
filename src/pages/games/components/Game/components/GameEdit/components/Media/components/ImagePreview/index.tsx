import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { BLACK_700, GRAY_100, WHITE, RED_500, DeleteIcon } from 'admin-library';
import Popup from 'components/Popup';

import DeleteConfirm from './components/DeleteConfirm';

interface Props {
  className?: string;
  imageSrc: string;
  onDelete: () => void;
}

const ImagePreview = (props: Props) => {
  const { className, imageSrc, onDelete } = props;
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setPopupOpen(false);
  };

  return (
    <Wrapper className={className} imageSrc={imageSrc}>
      <DeleteImage onClick={handlePopupOpen}>
        <DeleteIcon />
      </DeleteImage>
      <Popup open={popupOpen} onClose={handlePopupClose}>
        <DeleteConfirm 
          onDelete={handleDelete}
          onCancel={handlePopupClose}
        />
      </Popup>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ImagePreview, areEqual);

const Wrapper = styled.div<{ imageSrc?: string }>`
  position: relative;
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
