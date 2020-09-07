import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import { COVERS_SIZES } from 'const';
import InputLabel from 'components/InputLabel';
import { Image } from 'types/games';
import { Grid, BLACK_500 } from 'admin-library';

import { MediaWrapper, MediaContent, absoluteStyles } from '../../styles';
import ImagePreview from '../ImagePreview';
import ImageUploader from '../ImageUploader';

const SCREENSHOTS_TYPE = 'screenshot';
const { Row, Col } = Grid;

interface Props {
  className?: string;
  screenshots: Image[];
  onChange: (type: string, newScreenshots: Image[]) => void;
}

const Screenshots = (props: Props) => {
  const { className, screenshots, onChange } = props;
  const [width, height] = COVERS_SIZES[SCREENSHOTS_TYPE] || [0, 0];
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const isEmpty = !screenshots.length;

  const handleUpload = (screenshot: Image) => {
    onChange('screenshots', [...screenshots, screenshot]);
  };

  const handleDelete = () => {
    onChange('screenshots', screenshots.filter((_, i) => i !== activeScreenshot));
    setActiveScreenshot(0);
  };

  const handleChangeActiveScreenshot = (e: SyntheticEvent<HTMLImageElement>) => {
    const index = e.currentTarget?.dataset.index;

    if (!index) return;

    setActiveScreenshot(+index);
  };

  return (
    <MediaWrapper className={className} width={width}>
      <InputLabel label={`${width}x${height} px`} required />
      <MediaContent width={width} height={height}>
        {isEmpty ? (
          <StyledImageUploader
            type={SCREENSHOTS_TYPE}
            onUpload={handleUpload}
          />
        ) : (
            <StyledImagePreview
              onDelete={handleDelete}
              imageSrc={screenshots[activeScreenshot]?.url}
            />
          )}
      </MediaContent>
      {!isEmpty && (
        <SelectedScreenshots gap="8px">
          {screenshots.map(({ id, type, url }, index) => (
            <Col key={id} xs={12 / 7}>
              <Screenshot
                alt={type}
                src={url}
                active={index === activeScreenshot}
                data-index={index}
                onClick={handleChangeActiveScreenshot}
              />
            </Col>
          ))}
          <Col xs={12 / 7}>
            <MediaContent width={width} height={height}>
              <StyledImageUploader
                type={SCREENSHOTS_TYPE}
                onUpload={handleUpload}
                withText={false}
              />
            </MediaContent>
          </Col>
        </SelectedScreenshots>
      )}
    </MediaWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Screenshots, areEqual);

const StyledImageUploader = styled(ImageUploader)`
  ${absoluteStyles}
`;

const StyledImagePreview = styled(ImagePreview)`
  ${absoluteStyles}
`;

const SelectedScreenshots = styled(Row)`
  margin-top: 8px;
`;

const Screenshot = styled.img<{ active: boolean }>`
  width: 100%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  ${({ active }) => active && `
    opacity: 0.4;
    border: 1px solid ${BLACK_500};
  `}

  :hover {
    opacity: 0.7;
  }
`;
