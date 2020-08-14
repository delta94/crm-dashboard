import React from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getFeaturesRequest } from 'api';
import FormSelect from 'components/FormSelect';
import useResourses from 'hooks/useResourses';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Features = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();
  const { resources: features } = useResourses<NameWithId>(getFeaturesRequest);

  return (
    <FormSelect
      value={value}
      name="features"
      onChange={onChange}
      title={t('games.fields.featuresSupported.label')}
      label={t('games.fields.featuresSupported.label')}
      description={t('games.fields.featuresSupported.description')}
      options={features}
    />
  );
};

export default React.memo(Features);
