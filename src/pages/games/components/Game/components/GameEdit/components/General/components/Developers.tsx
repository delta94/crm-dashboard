import React from 'react';
import { TagsSelector } from 'admin-library';
import { NameWithId } from 'types/games';
import { getDevelopersRequest } from 'api';
import useResourses from 'hooks/useResourses';

interface Props {
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

const Developers = (props: Props) => {
  const { value, onChange } = props;
  const { resources: developers } = useResourses<NameWithId>(getDevelopersRequest);

  const handleChange = (newSelected: number[]) => {
    onChange('developers', newSelected);
  };

  return (
    <TagsSelector
      tags={developers}
      onChange={handleChange}
      selected={value}
    />
  );
};

export default React.memo(Developers);
