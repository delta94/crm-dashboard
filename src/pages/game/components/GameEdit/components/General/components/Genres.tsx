import React from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from 'components/FormSelect';
import { NameWithId } from 'types/games';
import { getGenresRequest } from 'api';
import useResourses from 'hooks/useResourses';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Genres = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();
  const { resources: genres } = useResourses<NameWithId>(getGenresRequest);

  return (
    <FormSelect
      value={value}
      name="genres"
      onChange={onChange}
      title={t('games.fields.genres.label')}
      label={t('games.fields.genres.label')}
      description={t('games.fields.genres.description')}
      options={genres}
    />
  );
};

export default React.memo(Genres);
