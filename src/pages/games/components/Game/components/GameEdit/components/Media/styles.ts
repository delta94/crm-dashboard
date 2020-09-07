import styled, { css } from 'styled-components/macro';

export const absoluteStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MediaWrapper = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
`;

export const MediaContent = styled.div<{ width: number; height: number }>`
  position: relative;
  padding-top: ${({ width, height }) => `${(height / width) * 100}%`};
`;
