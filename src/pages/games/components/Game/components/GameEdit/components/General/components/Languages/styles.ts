import styled from 'styled-components/macro';
import {
  GRAY_100,
  textOverflowStyles,
  WHITE,
  BLACK_600,
  DeleteIcon,
  RED_500,
} from 'admin-library';

export const StyledDeleteIcon = styled(DeleteIcon)`
  display: none;
  cursor: pointer;

  :hover {
    path {
      fill: ${RED_500};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${BLACK_600};

  :hover {
    ${StyledDeleteIcon} {
      display: block;
    }
  }
`;

export const Cell = styled.span`
  ${textOverflowStyles}
  color: ${GRAY_100};
  font-size: 12px;
  line-height: 1;
  width: 80px;
  flex-shrink: 0;
  text-align: center;
  margin-right: 24px;

  :first-child {
    color: ${WHITE};
    flex-grow: 1;
    text-align: start;
  }

  :last-child {
    width: 40px;
    margin-right: 0;
  }
`;
