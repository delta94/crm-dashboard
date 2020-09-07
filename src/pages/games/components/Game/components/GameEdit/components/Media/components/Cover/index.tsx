import React from 'react';
import styled from 'styled-components/macro';
import { Image } from 'types/games';
import { COVERS_SIZES } from 'const';
import InputLabel from 'components/InputLabel';

import ImagePreview from '../ImagePreview';
import ImageUploader from '../ImageUploader';
import { absoluteStyles, MediaWrapper, MediaContent } from '../../styles';

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
    <MediaWrapper width={width}className={props.className}>
      <InputLabel label={`${width}x${height} px`} required />
      <MediaContent width={width} height={height}>
        {!cover?.url ? (
          <StyledImageUploader
            onUpload={handleUpload}
            type={type}
            withText
          />
        ) : (
          <StyledImagePreview imageSrc={cover.url} onDelete={handleDelete} />
        )}
      </MediaContent>
    </MediaWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MyDropzone, areEqual);

const StyledImageUploader = styled(ImageUploader)`
  ${absoluteStyles}
`;

const StyledImagePreview = styled(ImagePreview)`
  ${absoluteStyles}
`;
