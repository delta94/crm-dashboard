import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Title } from 'pages/games/components/Game/styles';
import { GRAY_100, Caption12, Dropdown, TagList, Loader } from 'admin-library';

import { Row, Cell } from './styles';
import ListItem from './components/ListItem';
import { useLanguagesState } from 'containers/Languages';

interface Language {
  code: string;
  id: number;
  language: string;
}

interface Props {
  className?: string;
  value: any[];
  onChange: (name: string, value: any) => void;
}

const Languages = (props: Props) => {
  const { value, onChange, className } = props;
  const { languages, loading } = useLanguagesState();
  const { t } = useTranslation();
  const languageTags = languages.map(({ id }) => ({ id, name: t(`languages.${id}`) }));
  const selectedLanguages = value.map(({ language_id }) => language_id);

  if (loading) return <Loader />;

  const handleChangeLanguages = (ids: number[]) => {
    const newValue = ids.map(id => {
      const langIndex = value.findIndex(({ language_id }) => language_id === id);
      
      return langIndex < 0 ? {
          language_id: id,
          interface: false,
          audio: false,
          subtitles: false,
        } : value[langIndex];
    });
    
    onChange('localization', newValue);
  };

  const handleDeleteLanguage = (id: number) => {
    onChange('localization', value.filter(({ language_id }) => language_id !== id));
  };

  return (
    <Wrapper className={className}>
      <Title>{t('game.fields.supported_languages.label')}</Title>
      <StyledDescription color={GRAY_100}>
        <strong>{t('game.fields.supported_languages.interface')}</strong>
        {t('game.fields.supported_languages.interface_description')}
        <strong>{t('game.fields.supported_languages.voice')}</strong>
        {t('game.fields.supported_languages.voice_description')}
        <strong>{t('game.fields.supported_languages.subtitles')}</strong>
        {t('game.fields.supported_languages.subtitles_description')}
      </StyledDescription>
      <Row>
        <Cell />
        <Cell>{t('game.fields.supported_languages.interface')}</Cell>
        <Cell>{t('game.fields.supported_languages.audio')}</Cell>
        <Cell>{t('game.fields.supported_languages.subtitles')}</Cell>
        <Cell />
      </Row>
      {value.map((lang, i) => (
        <ListItem 
          key={lang.language_id}
          lang={lang}
          onChange={onChange}
          onDelete={handleDeleteLanguage}
          index={i}
        />
      ))}
      <StyledDropdown title={t('game.fields.supported_languages.add_language')}>
        <TagList
          tags={languageTags}
          selected={selectedLanguages}
          onChange={handleChangeLanguages}
        />
      </StyledDropdown>
    </Wrapper>
  );
};

export default React.memo(Languages);

const Wrapper = styled.div`
  margin-top: 40px;
`;

const StyledDescription = styled(Caption12)`
  display: block;
  margin-bottom: 7px;
`;

const StyledDropdown = styled(Dropdown)`
  margin-top: 8px;
`;
