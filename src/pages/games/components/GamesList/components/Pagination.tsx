import React from 'react';
import styled from 'styled-components';
import PaginationItem from './PaginationItem';

interface Props {
  className?: string;
  total: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: unknown, newPage: number) => void;
}

const Pagination = (props: Props) => {
  const { className, onChangePage, total, page, rowsPerPage } = props;
  const count = Math.ceil(total / rowsPerPage);
  const pages = Array(count).fill(0).map((_, i) => i);

  return (
    <Wrapper className={className}>
      {pages.map(pageNumber => (
        <PaginationItem 
          key={pageNumber} 
          selected={pageNumber === page} 
          onChangePage={onChangePage}
          page={pageNumber}
        />
      ))}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Pagination, areEqual);

const Wrapper = styled.div`
  display: flex;
`;
