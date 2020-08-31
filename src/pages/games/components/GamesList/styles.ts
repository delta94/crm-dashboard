import { Caption12, textOverflowStyles, BLACK_600 } from 'admin-library';
import styled from 'styled-components/macro';

export const Cell = styled(Caption12)`
  ${textOverflowStyles}
  display: inline-flex;
  align-items: center;
  flex-basis: 17%;
  text-align: start;
  text-transform: capitalize;
`;

export const FirstCell = styled(Cell)`
  flex-basis: 32%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${BLACK_600};
`;
