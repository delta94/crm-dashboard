import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import Covers from './components/Covers';
import Screenshots from './components/Screenshots';
import { Box, Button } from '@material-ui/core';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { game, onEdit } = props;
  const { covers, screenshots } = game.revision.media;
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
  console.log(coversIds, screenshotsIds);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const media = {
      covers: coversIds,
      screenshots: screenshotsIds,
    };

    onEdit({ media });
  };

  return (
    <form onSubmit={handleSubmit}>
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
