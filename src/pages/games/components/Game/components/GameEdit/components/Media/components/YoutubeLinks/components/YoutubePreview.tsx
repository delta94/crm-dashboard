import React from 'react';
import styled from 'styled-components/macro';

import { MediaContent, absoluteStyles } from '../../../styles';

interface Props {
  className?: string;
  url: string;
}

const YoutubePreview = (props: Props) => {
  const { className, url } = props;

  return (
    <Wrapper className={className}>
      <MediaContent width={16} height={9}>
        <Frame
          src={url}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </MediaContent>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev.url === next.url;

export default React.memo(YoutubePreview, areEqual);

const Wrapper = styled.div`
  margin-bottom: 12px;
`;

const Frame = styled.iframe`
  ${absoluteStyles}
  width: 100%;
  height: 100%;
`;
