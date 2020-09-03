import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { GRAY_100, SortIcon } from 'admin-library';

import { Cell, Row, CellText } from '../styles';

interface Props {
  className?: string;
}

const GamesTableHead = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Row className={className}>
      <Cell color={GRAY_100}>
        <CellText>{t('games.game_title')}</CellText>
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </Cell>
      <Cell color={GRAY_100}>
        <CellText>{t('games.price')}</CellText>
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </Cell>
      <Cell color={GRAY_100}>
        <CellText>{t('games.discount')}</CellText>
        <IconWrapper>
          <SortIcon />
        </IconWrapper>
      </Cell>
      <Cell color={GRAY_100}>
        <CellText>{t('games.release_date')}</CellText>
      </Cell>
      <Cell color={GRAY_100}>
        <CellText>{t('games.status')}</CellText>
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
