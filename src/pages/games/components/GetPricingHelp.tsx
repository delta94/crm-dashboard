import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { H2, Caption12, GRAY_100, PurpleOutlinedButton } from 'admin-library';

interface Props {
  className?: string;
}

const HelpAndGuideLines = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleClick = () => {
    console.log('Clicked get pricing help');
  };

  return (
    <Wrapper className={className}>
      <Title>
        {t('games.get_pricing_help.title')}
      </Title>
      <Description color={GRAY_100}>
        {t('games.get_pricing_help.description')}
      </Description>
      <PurpleOutlinedButton onClick={handleClick}>
        {t('games.get_pricing_help.button_text')}
      </PurpleOutlinedButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(HelpAndGuideLines, areEqual);

const Wrapper = styled.div``;

const Title = styled(H2)`
  margin: 0 0 4px;
`;

const Description = styled(Caption12)`
  display: block;
  margin-bottom: 16px;
`;
