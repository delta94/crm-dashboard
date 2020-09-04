import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Caption12, GRAY_100 } from 'admin-library';
import { Image } from 'types/games';
import { COVERS_SIZES } from 'const';

import ImagePreview from '../Cover/components/ImagePreview';
import ImageUploader from '../ImageUploader';

interface SizeProps {
  width: number;
  height: number;
}

interface Props {
  className?: string;
  cover?: Image;
  type: string;
  onChange: (type: string, cover?: Image) => void;
}

const MyDropzone = (props: Props) => {
  const { cover, onChange, type } = props;
  const [width, height] = COVERS_SIZES[type] || [0, 0];

  const handleUpload = (data: Image) => {
    onChange(type, data);
  };

  const handleDelete = () => {
    onChange(type);
  };
  
  return (
    <Wrapper width={width}className={props.className}>
      <Size color={GRAY_100}>{`${width}x${height} px`}</Size>
      <Content width={width} height={height}>
        {!cover?.url ? (
          <StyledImageUploader
            onUpload={handleUpload}
            type={type}
            withText
          />
        ) : (
          <StyledImagePreview imageSrc={cover.url} onDelete={handleDelete} />
        )}
      </Content>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MyDropzone, areEqual);

const Wrapper = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
`;

const Content = styled.div<SizeProps>`
  position: relative;
  padding-top: ${({ width, height }) => `${(height / width) * 100}%`};
`;

const Size = styled(Caption12)`
  display: block;
  margin-bottom: 4px;
`;

const absoluteStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledImageUploader = styled(ImageUploader)`
  ${absoluteStyles}
`;

const StyledImagePreview = styled(ImagePreview)`
  ${absoluteStyles}
`;
