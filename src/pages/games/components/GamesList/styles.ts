import { Caption12, textOverflowStyles, BLACK_600 } from 'admin-library';
import styled from 'styled-components/macro';

export const Cell = styled(Caption12)`
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  flex-basis: 17%;
  text-align: start;
  text-transform: capitalize;
  padding-left: 8px;

  :first-child {
    flex-basis: 32%;
  }
`;

export const CellText = styled.span`
  ${textOverflowStyles}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid ${BLACK_600};
`;
