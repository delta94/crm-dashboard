import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';
import ImageUpload from './components/ImageUpload';
import { Typography } from '@material-ui/core';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { game, onEdit } = props;
  const { covers, screenshots } = game.revision.media;
  console.log(covers, screenshots);
  const { t } = useTranslation();

  return (
    <div>
      <Typography gutterBottom variant="h6">
        {t('games.fields.media.label')}
      </Typography>
      <ImageUpload type="vertical" onChangeId={() => { console.log(''); }} />
      <ImageUpload type="horizontal" onChangeId={() => { console.log(''); }} />
    </div>
  );
};

export default React.memo(Media);

/**
 * media:
covers:
catalog: {id: 0, type: "", url: ""}
horizontal: {id: 0, type: "", url: ""}
horizontal_small: {id: 0, type: "", url: ""}
large_single: {id: 0, type: "", url: ""}
vertical: {id: 0, type: "", url: ""}
wide_slider: {id: 0, type: "", url: ""}
__proto__: Object
screenshots: null
__proto__: Object
platforms: []
 */
