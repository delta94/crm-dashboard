import React from 'react';
import styled from 'styled-components/macro';
import { Caption12, GRAY_100, RED_500 } from 'admin-library';

interface Props {
  className?: string;
  label: string;
  required?: boolean;
}

const InputLabel = (props: Props) => {
  const { className, label, required = false } = props;

  return (
    <Wrapper color={GRAY_100} className={className}>
      {label}&nbsp;{required && <Caption12 color={RED_500}>*</Caption12>}
    </Wrapper>
  );
};

export default React.memo(InputLabel);

const Wrapper = styled(Caption12)``;
