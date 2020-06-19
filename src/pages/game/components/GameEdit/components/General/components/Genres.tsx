import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from 'components/FormSelect';
import { NameWithId } from 'types/games';
import { getGenresRequest } from 'api';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Genres = (props: Props) => {
  const { value, onChange } = props;
  const [genres, setGenres] = useState<NameWithId[]>([]);
  const { t } = useTranslation();

  const loadDevelopers = async () => {
    const { json, error } = await getGenresRequest();

    if (!error) setGenres(json);
  };

  useEffect(() => {
    loadDevelopers();
  }, []);

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
