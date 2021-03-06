import styled from 'styled-components/macro';
import { H2, Caption12, GRAY_100, Micro10 } from 'admin-library';

export const Title = styled(H2)`
  margin: 0 0 4px;
`;

export const Description = styled(Caption12).attrs({ color: GRAY_100 })`
  display: block;
  margin: 0 0 20px;
`;

export const InputWrapper = styled.div`
  min-height: 82px;
`;

export const InputError = styled(Micro10)`
  display: block;
  height: 14px;
  margin-top: 4px;
`;
