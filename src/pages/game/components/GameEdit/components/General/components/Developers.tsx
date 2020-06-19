import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from 'components/FormSelect';
import { NameWithId } from 'types/games';
import { getDevelopersRequest } from 'api';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Developers = (props: Props) => {
  const { value, onChange } = props;
  const [developers, setDevelopers] = useState<NameWithId[]>([]);
  const { t } = useTranslation();

  const loadDevelopers = async () => {
    const { json, error } = await getDevelopersRequest();

    if (!error) setDevelopers(json);
  };

  useEffect(() => {
    loadDevelopers();
  }, []);

  return (
    <FormSelect
      value={value}
      name="developers"
      onChange={onChange}
      title={t('games.fields.developers.label')}
      label={t('games.fields.developers.label')}
      description={t('games.fields.developers.description')}
      options={developers}
    />
  );
};

export default React.memo(Developers);
