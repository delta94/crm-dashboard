import React from 'react';
import { useTranslation } from 'react-i18next';
import { NameWithId } from 'types/games';
import { getGenresRequest } from 'api';
import useResourses from 'hooks/useResourses';
import { TagsSelector } from 'admin-library';
import styled from 'styled-components';
import { Title, Description } from 'pages/games/components/Game/styles';

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
      <Description>{t('game.fields.genres.description')}</Description>
      <TagsSelector
        tags={genres}
        onChange={handleChange}
        selected={value}
      />
    </Wrapper>
  );
};

export default React.memo(Genres);

const Wrapper = styled.div`
  margin-top: 40px;
`;
