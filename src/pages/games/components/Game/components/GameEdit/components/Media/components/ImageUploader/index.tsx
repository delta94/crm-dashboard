import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDropzone } from 'react-dropzone';
import { createGameMediaRequest, uploadMediaRequest } from 'api/games';
import { Image } from 'types/games';
import { useTranslation } from 'react-i18next';
import {
  snakeToCamelCase,
  Caption12,
  GRAY_100,
  PURPLE_500,
  RED_500,
  GRAY_200,
  RoundedArrowIcon,
  RoundedMinusIcon,
  Spinner,
} from 'admin-library';

interface Props {
  className?: string;
  type: string;
  onUpload: (data: Image) => void;
  withText?: boolean;
}

const MyDropzone = (props: Props) => {
  const { type, onUpload, className, withText = true } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

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

    onUpload({ type, id, url });
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  const content = (
    <Content onClick={open}>
      {error ? <RoundedMinusIcon /> : <UploadIcon color={isDragActive ? PURPLE_500 : GRAY_100} />}
      {withText && (
        error ? (
          <Text color={RED_500}>
            {t('game.fields.media.failed_upload_image')}
            <Caption12 color={PURPLE_500}>
              {t('game.fields.media.try_again')}
            </Caption12>
          </Text>
        ) : (
            <Text color={isDragActive ? PURPLE_500 : GRAY_100} >
              {t('game.fields.media.upload_image')}
            </Text>
          )
      )}
    </Content>
  );

  return (
    <Wrapper
      {...getRootProps()}
      className={className}
      error={!!error}
      active={loading || isDragActive}
    >
      <input {...getInputProps()} />
        {loading ? <Spinner /> : content}
    </Wrapper >
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(MyDropzone, areEqual);

const getBorderColor = (error: boolean, active: boolean) => {
  if (active) return PURPLE_500;

  return error ? RED_500 : GRAY_200;
};

const Wrapper = styled.div<{ error: boolean; active: boolean }>`
  border: 1px dashed ${({ error, active }) => getBorderColor(error, active)};
  background-color: ${({ active }) => active ? 'rgba(114, 101, 229, 0.1)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
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
  path {
    stroke: ${({ color }) => color}
  }
`;

const Text = styled(Caption12)`
  margin-top: 5px;
`;
