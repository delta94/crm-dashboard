import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { GRAY_100, SortIcon } from 'admin-library';

import { FirstCell, Cell, Row } from '../styles';

interface Props {
  className?: string;
}

const GamesTableHead = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Row className={className}>
      <FirstCell color={GRAY_100}>
        {t('games.game_title')}
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </FirstCell>
      <Cell color={GRAY_100}>
        {t('games.price')}
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </Cell>
      <Cell color={GRAY_100}>
        {t('games.discount')}
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </Cell>
      <Cell color={GRAY_100}>
        {t('games.release_date')}
      </Cell>
      <Cell color={GRAY_100}>
        {t('games.status')}
      </Cell>
    </Row>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GamesTableHead, areEqual);

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
