import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Title, Description } from 'pages/games/components/Game/styles';
import { Review as ReviewType } from 'types/games';
import PressAgent from './PressAgent';
import { PurpleOutlinedButton } from 'admin-library';

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
      <Description>{t('game.fields.review.description')}</Description>
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
      >
        {`+ ${t('game.fields.review.add_press_agent')}`}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

export default React.memo(Review);

const Wrapper = styled.div``;
