import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Micro10, RED_500 } from 'admin-library';

interface Props {
  className?: string;
  error?: false | string;
}

const InputError = (props: Props) => {
  const { className, error } = props;
  const { t } = useTranslation();

  if (!error) return null;

  return (
    <Wrapper color={RED_500} className={className}>
      {t(error)}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(InputError, areEqual);

const Wrapper = styled(Micro10)`
  display: block;
  height: 18px;
  padding-top: 4px;
  margin-bottom: 6px;
`;
