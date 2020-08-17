import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caption12, GRAY_100, FolderIcon } from 'admin-library';

interface Props {
  className?: string;
}

const EmptyList = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <FolderIcon />
      <Text color={GRAY_100}>
        {t('games.no_games_yet')}
      </Text>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(EmptyList, areEqual);

const Wrapper = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled(Caption12)`
  margin-top: 20px;
`;
