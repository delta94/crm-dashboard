import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { useDropzone } from 'react-dropzone';
import { createGameMediaRequest, uploadMediaRequest } from 'api/games';
import {
  snakeToCamelCase,
  GRAY_200,
  RED_500,
  PURPLE_500,
  Caption12,
  GRAY_100,
  Spinner,
  RoundedArrowIcon,
} from 'admin-library';
import { useTranslation } from 'react-i18next';

interface SizeProps {
  width: number;
  height: number;
}

interface Props extends SizeProps {
  className?: string;
  type: string;
  src?: string;
  onChangeId: (type: string, id: number) => void;
}

const MyDropzone = (props: Props) => {
  const { type, src = '', onChangeId, width, height } = props;
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const onDrop = async ([image]: any[]) => {
    setLoading(true);

    const { error: createError, json: createJson } = await createGameMediaRequest({
      type: snakeToCamelCase(type),
    });

    if (createError) {
      setError(createError.message);
      setLoading(false);

      return;
    }

    if (!image) {
      setLoading(false);

      return;
    }

    const { id } = createJson;

    const { error: uploadError, json: uploadJson } = await uploadMediaRequest(id, image);

    setLoading(false);

    if (uploadError) {
      setError(uploadError.message);

      return;
    }

    const { url } = uploadJson;

    setImageSrc(url);
    onChangeId(type, id);
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  const rootProps = getRootProps();
  const inputProps = getInputProps();

  const uploadButton = (
    <UploadButton onClick={open}>
      <UploadIcon color={isDragActive ? PURPLE_500 : GRAY_100} />
      <Caption12 color={isDragActive ? PURPLE_500 : GRAY_100}>{t('upload_image')}</Caption12>
    </UploadButton>
  );

  const imageLoader = (
    <Loader
      {...rootProps}
      error={!!error}
      active={loading || isDragActive}
    >
      <input {...inputProps} />
      {loading ? <Spinner /> : uploadButton}
    </Loader>
  );

  const preview = (
    <Preview imageSrc={imageSrc}>
      hello
    </Preview>
  );

  console.log({ isDragActive, open });

  return (
    <Wrapper className={props.className}>
      <Size color={GRAY_100}>{`${width}x${height} px`}</Size>
      <Content width={width} height={height}>
        {!imageSrc ? imageLoader : preview}
      </Content>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MyDropzone, areEqual);

const getBorderColor = (error: boolean, active: boolean) => {
  if (error) return RED_500;

  return active ? PURPLE_500 : GRAY_200;
};

const Wrapper = styled.div``;

const Content = styled.div<SizeProps>`
  position: relative;
  padding-top: ${({ width, height }) => `${(height / width) * 100}%`};
`;

const absoluteStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Loader = styled.div<{ error: boolean; active: boolean }>`
  ${absoluteStyles}
  border: 1px dashed ${({ error, active }) => getBorderColor(error, active)};
  background-color: ${({ active }) => active ? 'rgba(114, 101, 229, 0.1)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Size = styled(Caption12)`
  display: block;
  margin-bottom: 4px;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :active {
    opacity: 1;
  }
`;

const UploadIcon = styled(RoundedArrowIcon) <{ color: string }>`
  margin-bottom: 8px;
  
  path {
    stroke: ${({ color }) => color}
  }
`;

const Preview = styled.div<{ imageSrc?: string }>`
  ${absoluteStyles}
  background: center / contain no-repeat url(${({ imageSrc }) => imageSrc});
`;
