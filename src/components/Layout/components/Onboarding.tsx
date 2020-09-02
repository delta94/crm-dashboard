import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Caption12, Micro10, GRAY_100, PurpleOutlinedButton } from 'admin-library';

interface Props {
  className?: string;
}

const Onboarding = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleClick = () => {
    console.log('Clicked onboarding complete');
  };

  return (
    <Wrapper className={className}>
      <Title>
        {t('layout.onboarding.title')}
      </Title>
      <Description color={GRAY_100}>
        {t('layout.onboarding.description')}
      </Description>
      <PurpleOutlinedButton onClick={handleClick}>
        {t('layout.onboarding.button_text')}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Onboarding, areEqual);

const Wrapper = styled.div`
  padding: 16px 0;
`;

const Title = styled(Caption12)`
  display: block;
  margin-bottom: 4px;
`;

const Description = styled(Micro10)`
  display: block;
  margin-bottom: 16px;
`;
