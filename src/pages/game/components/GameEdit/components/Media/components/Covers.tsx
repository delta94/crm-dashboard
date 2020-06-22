import React from 'react';
import { useTranslation } from 'react-i18next';
import { Covers as CoversType } from 'types/games';

import Cover from './Cover';

interface Props {
  covers: CoversType;
  onChangeId: (type: string, id: number) => void;
}

const Covers = (props: Props) => {
  const { covers, onChangeId } = props;
  const { t } = useTranslation();

  return (
    <div>
      {Object.entries(covers).map(([key, value]) => (
        <Cover
          key={key}
          title={t(`games.fields.media.${key}`)}
          onChangeId={onChangeId}
          src={value.url}
          type={key}
        />
      ))}
    </div>
  );
};

export default React.memo(Covers);
