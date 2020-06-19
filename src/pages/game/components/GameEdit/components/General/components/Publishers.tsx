import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from 'components/FormSelect';
import { NameWithId } from 'types/games';
import { getPublishersRequest } from 'api';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Publishers = (props: Props) => {
  const { value, onChange } = props;
  const [publishers, setPublishers] = useState<NameWithId[]>([]);
  const { t } = useTranslation();

  const loadDevelopers = async () => {
    const { json, error } = await getPublishersRequest();

    if (!error) setPublishers(json);
  };

  useEffect(() => {
    loadDevelopers();
  }, []);

  return (
    <FormSelect
      value={value}
      name="publishers"
      onChange={onChange}
      title={t('games.fields.publishers.label')}
      label={t('games.fields.publishers.label')}
      description={t('games.fields.publishers.description')}
      options={publishers}
    />
  );
};

export default React.memo(Publishers);
