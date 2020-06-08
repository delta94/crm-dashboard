import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'types/games';

interface Props {
  game: Game;
}

const General = (props: Props) => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('Media')}
    </h2>
  );
};

export default React.memo(General);
