import React from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getGenresRequest } from 'api';
import useResourses from 'hooks/useResourses';
import { TagsSelector } from 'admin-library';
import styled from 'styled-components/macro';
import { Title, Description } from 'pages/games/components/Game/styles';

const GENRES_LIMIT = 3;

interface Props {
  className?: string;
  value: number[];
  onChange: (name: string, value: number[]) => void;
}

const Genres = (props: Props) => {
  const { value, onChange, className } = props;
  const { t } = useTranslation();
  const { resources: genres } = useResourses<NameWithId>(getGenresRequest);

  const handleChange = (newSelected: number[]) => {
    onChange('genres', newSelected);
  };

  return (
    <Wrapper className={className}>
      <Title>{t('game.fields.genres.label')}</Title>
      <Description>{t('game.fields.genres.description', { limit: GENRES_LIMIT })}</Description>
      <TagsSelector
        tags={genres}
        onChange={handleChange}
        selected={value}
        limit={GENRES_LIMIT}
        name="genres"
      />
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Genres, areEqual);

const Wrapper = styled.div`
  margin-top: 40px;
`;
