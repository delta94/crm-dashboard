import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Button } from '@material-ui/core';
import { createGameMediaRequest, uploadMediaRequest } from 'api';
import { snakeToCamelCase } from 'helpers';

const useStyles = makeStyles({
  imageWrapper: {
    margin: '0 auto',
    backgroundColor: 'gray',
    height: '30vw',
    display: 'flex',
    position: 'relative',
    borderRadius: 4,
    overflow: 'hidden',
    border: '2px solid white',
    maxWidth: '100%',
  },
  horizontal: {
    width: '40vw',
  },
  vertical: {
    width: '23vw',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  button: {
    margin: 'auto',
  },
});

interface Props {
  type: string;
  src?: string;
  multiple?: boolean;
  onChangeId: (type: string, id: number) => void;
}

const ImageUpload = (props: Props) => {
  const { type, src, onChangeId, multiple = false } = props;
  const [imageSrc, setImageSrc] = useState(src);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.currentTarget.files;
    const { error: createError, json: createJson } = await createGameMediaRequest({
      type: snakeToCamelCase(type),
    });

    if (createError) {
      alert(createError.message);
      return;
    }

    if (!fileList || !fileList[0]) return;

    const { id } = createJson;

    const { error: uploadError, json: uploadJson } = await uploadMediaRequest(id, fileList[0]);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const { url } = uploadJson;

    setImageSrc(url);
    onChangeId(type, id);
  };

  return (
    <div>
      <div
        className={
          `${classes.imageWrapper} ${type === 'vertical' ? classes.vertical : classes.horizontal}`
        }
      >
        {imageSrc && <img className={classes.image} src={imageSrc} alt={`${type}`} />}
        <label className={classes.button}>
          <input
            multiple={multiple}
            type="file"
            accept="image/png"
            onChange={handleImageChange}
            hidden
          />
          <Button variant="contained" color="primary" component="span">
            {imageSrc ? t('replace') : t('upload')}
          </Button>
        </label>
      </div>
    </div >
  );
};

export default React.memo(ImageUpload);
