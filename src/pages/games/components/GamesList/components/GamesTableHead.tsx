import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Caption12, GRAY_100, BLACK_600, SortIcon, textOverflowStyles } from 'admin-library';

interface Props {
  className?: string;
}

const GamesTableHead = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <thead className={className}>
      <tr>
        <FirstCell>
          <Caption12 color={GRAY_100}>{t('games.game_title')}</Caption12>
        </FirstCell>
        <Cell>
          <IconWrapper>
            <SortIcon />
          </IconWrapper>
          <Caption12 color={GRAY_100}>{t('games.price')}</Caption12>
        </Cell>
        <Cell>
          <IconWrapper>
            <SortIcon />
          </IconWrapper>
          <Caption12 color={GRAY_100}>{t('games.discount')}</Caption12>
        </Cell>
        <Cell>
          <IconWrapper>
            <SortIcon />
          </IconWrapper>
          <Caption12 color={GRAY_100}>{t('games.release_date')}</Caption12>
        </Cell>
        <Cell>
          <Caption12 color={GRAY_100}>{t('games.status')}</Caption12>
        </Cell>
      </tr>
    </thead>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GamesTableHead, areEqual);

const Cell = styled.th`
  ${textOverflowStyles}
  padding: 0 0 8px;
  border-bottom: 1px solid ${BLACK_600};
  width: 17%;
  text-align: start;
`;

const FirstCell = styled(Cell)`
  width: 32%;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
