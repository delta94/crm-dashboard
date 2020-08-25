import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Caption12, BLACK_500, PURPLE_500 } from 'admin-library';

interface Props {
  className?: string;
  page: number;
  selected: boolean;
  onChangePage: (event: unknown, newPage: number) => void;
}

const PaginationItem = (props: Props) => {
  const { className, page, selected, onChangePage } = props;

  const handleChangePage = (e: SyntheticEvent) => {
    onChangePage(e, page);
  };

  return (
    <Wrapper className={className} selected={selected} onClick={handleChangePage}>
      {page + 1}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PaginationItem, areEqual);

const Wrapper = styled(Caption12)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ selected }) => selected ? BLACK_500 : 'transparent'};
  cursor: pointer;

  :hover {
    background-color: ${({ selected }) => selected ? BLACK_500 : PURPLE_500};
  }
`;
