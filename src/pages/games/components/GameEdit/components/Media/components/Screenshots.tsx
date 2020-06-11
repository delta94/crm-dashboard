import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'types/games';
import { Typography, Grid, makeStyles, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import ImageUploader from './ImageUploader';

const useStyles = makeStyles({
  add: {
    marginTop: 24,
  },
  delete: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  grid: {
    position: 'relative',
    display: 'inline-block',
  },
});

interface Props {
  screenshots: Image[] | null;
  onChangeIds: (ids: number[]) => void;
}

const Screenshots = (props: Props) => {
  const { onChangeIds } = props;
  const [screenshots, setScreenshots] = useState<Image[]>(
    props.screenshots || []);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChangeId = (index: number) => (_: string, id: number) => {
    const newScreenshots = [
      ...screenshots.slice(0, index),
      { ...screenshots[index], id },
      ...screenshots.slice(index + 1),
    ];
    setScreenshots(newScreenshots);

    onChangeIds(newScreenshots.map(({ id }) => id));
  };

  const handleAddScreenshot = () => {
    setScreenshots([...screenshots, { url: '', id: 0, type: '' }]);
  };

  const handleDeleteScreenshot = (index: number) => () => {
    setScreenshots([...screenshots.slice(0, index), ...screenshots.slice(index + 1)]);
  };

  return (
    <div>
      <Typography gutterBottom variant="h6">
        {t('games.fields.media.screenshots')}
      </Typography>
      <Grid container spacing={2}>
        {screenshots.map(({ url }, i) => (
          <Grid item xs={12} md={6} key={url ? url : i}>
            <div className={classes.grid}>
              <ImageUploader type="screenshot" onChangeId={handleChangeId(i)} src={url} />
              <Fab
                size="small"
                color="secondary"
                onClick={handleDeleteScreenshot(i)}
                className={classes.delete}
              >
                <DeleteIcon />
              </Fab>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleAddScreenshot}
        startIcon={<AddIcon />}
        className={classes.add}
      >
        {t('add')}
      </Button>
    </div>
  );
};

export default React.memo(Screenshots);
