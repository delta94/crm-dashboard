import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('Media')}
    </h2>
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
