import React from 'react';
import { useTranslation } from 'react-i18next';
import FormSelect from 'components/FormSelect';
import { NameWithId } from 'types/games';
import { getTagsRequest } from 'api';
import useResourses from 'hooks/useResourses';

interface Props {
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Tags = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();
  const { resources: tags } = useResourses<NameWithId>(getTagsRequest);

  return (
    <FormSelect
      value={value}
      name="tags"
      onChange={onChange}
      title={t('games.fields.tags.label')}
      label={t('games.fields.tags.label')}
      description={t('games.fields.tags.description')}
      options={tags}
    />
  );
};

export default React.memo(Tags);
