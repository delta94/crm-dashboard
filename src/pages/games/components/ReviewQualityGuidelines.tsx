import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { H2, Caption12, GRAY_100, PurpleOutlinedButton } from 'admin-library';

interface Props {
  className?: string;
}

const ReviewQualityGuidelines = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleClick = () => {
    console.log('Clicked Review Quality Guidelines');
  };

  return (
    <Wrapper className={className}>
      <Title>
        {t('games.review_quality_guidelines.title')}
      </Title>
      <Description color={GRAY_100}>
        {t('games.review_quality_guidelines.description')}
      </Description>
      <PurpleOutlinedButton onClick={handleClick}>
        {t('games.review_quality_guidelines.button_text')}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ReviewQualityGuidelines, areEqual);

const Wrapper = styled.div``;

const Title = styled(H2)`
  margin: 0 0 4px;
`;

const Description = styled(Caption12)`
  display: block;
  margin-bottom: 16px;
`;
