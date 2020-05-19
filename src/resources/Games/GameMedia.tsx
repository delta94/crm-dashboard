import React from 'react';

interface Props {
  className?: string;
}

const GameMedia = () => {
  return (
    <>media</>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GameMedia, areEqual);
