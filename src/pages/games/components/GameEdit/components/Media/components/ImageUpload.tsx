import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '20px 0',
  },
  imageWrapper: {
    margin: '0 auto',
    backgroundColor: 'gray',
    height: 400,
    display: 'flex',
    position: 'relative',
    borderRadius: 4,
    overflow: 'hidden',
  },
  horizontal: {
    width: 530,
  },
  vertical: {
    width: 300,
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
  id?: number;
  multiple?: boolean;
  onChangeId: (id: number) => void;
}

const ImageUpload = (props: Props) => {
  const { type, src, id, onChangeId, multiple = false } = props;
  const [file, setFile] = useState<Blob | undefined>();
  const fileSrc = file && URL.createObjectURL(file);
  const imageSrc = src || fileSrc;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h6">
        {t(`games.fields.media.${type}`)}
      </Typography>
      <div
        className={
          `${classes.imageWrapper} ${type === 'vertical' ? classes.vertical : classes.horizontal}`
        }
      >
        {imageSrc && <img className={classes.image} src={imageSrc} />}
        <label className={classes.button}>
          <input
            multiple={multiple}
            hidden type="file"
            accept="image/png"
            onChange={(e: any) => setFile(e.currentTarget.files[0])}
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
