import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Title, Description } from 'pages/games/components/Game/styles';
import { Review as ReviewType } from 'types/games';
import { PurpleOutlinedButton } from 'admin-library';
import { MAX_REVIEW_COUNT } from 'const';

import PressAgent from './PressAgent';

interface Props {
  value: ReviewType[];
  onChange: (name: string, value: any) => void;
}

const Review = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();

  const handleAddReview = () => {
    const newValue = [
      {
        press_name: '',
        link: '',
        score: '',
        quote: '',
      },
      ...value];

    onChange('review', newValue);
  };

  const handleDeleteReview = (index: number) => {
    const newValue = value.filter((_, i) => i !== index);

    onChange('review', newValue);
  };

  useEffect(() => {
    if (!value.length) {
      handleAddReview();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>{t('game.fields.review.label')}</Title>
      <Description>{t('game.fields.review.description', { limit: MAX_REVIEW_COUNT })}</Description>
      {value.map((review, index) => (
        <PressAgent 
          key={index} 
          index={index} 
          value={review} 
          onChange={onChange}
          onDelete={index !== value.length - 1 ? handleDeleteReview : undefined}
          name={`review[${index}]`}
        />
      ))}
      <PurpleOutlinedButton
        onClick={handleAddReview}
        disabled={value.length >= MAX_REVIEW_COUNT}
        type="button"
      >
        {`+ ${t('game.fields.review.add_press_agent')}`}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Review, areEqual);

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
