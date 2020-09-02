import React from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getTagsRequest } from 'api';
import useResourses from 'hooks/useResourses';
import styled from 'styled-components/macro';
import { Title, Description } from 'pages/games/components/Game/styles';
import { TagsSelector } from 'admin-library';

interface Props {
  className?: string;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

const Tags = (props: Props) => {
  const { value, onChange, className } = props;
  const { t } = useTranslation();
  const { resources: tags } = useResourses<NameWithId>(getTagsRequest);

  const handleChange = (newSelected: number[]) => {
    onChange('tags', newSelected);
  };

  return (
    <Wrapper className={className}>
      <Title>{t('game.fields.tags.label')}</Title>
      <Description>{t('game.fields.tags.description')}</Description>
      <TagsSelector
        tags={tags}
        onChange={handleChange}
        selected={value}
      />
    </Wrapper>
  );
};

export default React.memo(Tags);

const Wrapper = styled.div`
  margin-top: 40px;
`;
