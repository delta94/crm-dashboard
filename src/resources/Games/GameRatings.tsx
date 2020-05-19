import React from 'react';

interface Props {
  className?: string;
}

const GameRatings = () => {
  return (
    <>ratings</>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GameRatings, areEqual);
