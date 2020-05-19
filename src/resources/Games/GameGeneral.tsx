import React from 'react';

interface Props {
  className?: string;
}

const GameGeneral = () => {
  return (
    <>general</>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(GameGeneral, areEqual);
