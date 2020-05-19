import React from 'react';

interface Props {
  className?: string;
}

const GameDescription = () => {
  return (
    <>description</>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GameDescription, areEqual);
