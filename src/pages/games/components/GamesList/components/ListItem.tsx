import React from 'react';
import { Game } from 'types/games';
import styled from 'styled-components';
import { PURPLE_500, WHITE, GRAY_100, ORANGE_500, RED_500 } from 'admin-library';
import emptyCover from 'assets/images/empty-cover.png';
import { formateIsoDate } from 'helpers';

import { Cell, FirstCell, Row } from '../styles';

const getStatusColor = (status: string) => {
  const lowerStatus = status.toLowerCase();

  if (lowerStatus === 'released') return WHITE;

  if (lowerStatus === 'rejected') return RED_500;

  return ORANGE_500;
};

interface Props {
  className?: string;
  game: Game;
  onClick: (id: string) => void;
}

const ListItem = (props: Props) => {
  const { game, onClick, className } = props;
  const { id, title, slug, revision } = game;
  const { release_date, status, media: { covers } } = revision;
  const gameImg = covers.catalog?.url;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <Wrapper onClick={handleClick} className={className}>
      <StyledRow>
        <FirstCell>
          <Image alt={id} src={gameImg || emptyCover} />
          {title}
        </FirstCell>
        <Cell>{title}</Cell>
        <Cell>{slug}</Cell>
        <StyledCell color={release_date ? WHITE : GRAY_100}>
          {release_date ? formateIsoDate(release_date) : '–'}
        </StyledCell>
        <StyledCell color={getStatusColor(status)}>{status}</StyledCell>
      </StyledRow>
    </Wrapper>
  );
};

export default React.memo(ListItem);

const StyledRow = styled(Row)``;

const StyledCell = styled(Cell)``;

const Wrapper = styled.div`
  padding: 1px 8px;
  margin: -1px -8px;
  border-radius: 2px;
  cursor: pointer;

  :hover {
    background-color: ${PURPLE_500};
    
    ${StyledRow} {
      border-bottom-color: ${PURPLE_500};
    }

    ${StyledCell} {
      color: white;
    }
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  margin-right: 12px;
`;
