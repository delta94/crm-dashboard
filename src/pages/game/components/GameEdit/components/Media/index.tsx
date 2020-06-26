import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import Covers from './components/Covers';
import Screenshots from './components/Screenshots';
import { Box, Button, Typography, TextField } from '@material-ui/core';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { game, onEdit } = props;
  const { media: { covers, screenshots }, trailer: initTrailer } = game.revision;
  const [coversIds, setCoversIds] = useState({
    catalog: covers.catalog.id,
    horizontal: covers.horizontal.id,
    horizontal_small: covers.horizontal_small.id,
    large_single: covers.large_single.id,
    vertical: covers.vertical.id,
    wide_slider: covers.wide_slider.id,
  });
  const [screenshotsIds, setScreenshotsIds] = useState(
    screenshots ? screenshots.map(({ id }) => id) : [],
  );
  const [trailer, setTrailer] = useState(initTrailer);

  const { t } = useTranslation();

  const handleChangeCoverId = (type: string, id: number) => {
    setCoversIds({
      ...coversIds,
      [type]: id,
    });
  };

  const handleChangeScreenshotsIds = (ids: number[]) => {
    setScreenshotsIds(ids);
  };

  const handleTrailerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTrailer(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const media = {
      covers: coversIds,
      screenshots: screenshotsIds,
    };

    onEdit({ media, trailer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box marginBottom={4}>
        <Typography gutterBottom variant="h6">
          {t('games.fields.media.trailer')}
        </Typography>
        <TextField
          name="title"
          label={t('games.fields.media.trailer')}
          variant="outlined"
          value={trailer}
          onChange={handleTrailerChange}
          fullWidth
        />
      </Box>
      <Box marginBottom={4}>
        <Covers covers={covers} onChangeId={handleChangeCoverId} />
      </Box>
      <Box marginBottom={4}>
        <Screenshots screenshots={screenshots} onChangeIds={handleChangeScreenshotsIds} />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        {t('save')}
      </Button>
    </form>
  );
};

export default React.memo(Media);
