import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { BLACK_700, H2, Caption12, GRAY_100, buttonStyles, BLACK_500, RED_500 } from 'admin-library';

interface Props {
  className?: string;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirm = (props: Props) => {
  const { className, onDelete, onCancel } = props;
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <Title>
        {t('game.fields.media.deleting_image_title')}
      </Title>
      <Description color={GRAY_100}>
        {t('game.fields.media.deleting_image_description')}
      </Description>
      <div>
        <CancelButton
          color="transparent"
          onClick={onCancel}
        >
          {t('game.fields.media.keep_button')}
        </CancelButton>
        <DeleteButton
          color={RED_500}
          onClick={onDelete}
        >
        {t('game.fields.media.delete_button')}
        </DeleteButton>
      </div>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(DeleteConfirm, areEqual);

const Wrapper = styled.div`
  width: 396px;
  background: ${BLACK_700};
  border-radius: 4px;
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

const Title = styled(H2)`
  margin: 0 0 8px;
`;

const Description = styled(Caption12)`
  margin-bottom: 32px;
`;

const DeleteButton = styled.button`
  ${buttonStyles}
  border: 1px solid ${RED_500};
  padding: 12px 20px;
  transition: opacity 0.15s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }
`;

const CancelButton = styled(DeleteButton)`
  border: 1px solid ${BLACK_500};
  margin-right: 8px;
`;
