import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialLink } from 'types/games';
import styled from 'styled-components/macro';
import { Title, Description, InputWrapper, InputError } from 'pages/games/components/Game/styles';
import InputLabel from 'components/InputLabel';
import { Input, PurpleOutlinedButton, RED_500 } from 'admin-library';

import ExternalLink from './ExternalLink';

const gameSitePlacehholder = 'eg. https://yoursite.com';

interface Props {
  value: Record<string, SocialLink>;
  onChange: (name: string, value: any) => void;
  error?: string;
}

const socials = ['facebook', 'twitter', 'youtube', 'twitch', 'discord', 'vkontakte', 'reddit'];

const ExternalLinks = (props: Props) => {
  const { value, onChange, error } = props;
  const { t } = useTranslation();
  const socialLinks = Object.keys(value).filter(type => type !== 'site');
  const missingLinks = socials.filter(link => !(link in value));
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const handleAddLink = (e: SyntheticEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.type || '';
    
    onChange('socialLinksMap', { ...value, [type]: { type, url: '' } });
  };

  const handleDeleteLink = (type: string) => {
    const newValue = { ...value };
    delete newValue[type];

    onChange('socialLinksMap', newValue);
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    onChange(name, value);
  };

  useEffect(() => {
    if ('site' in value) return;

    onChange('socialLinksMap', { ...value, site: { type: 'site', url: '' } });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>{t('game.fields.external_links.label')}</Title>
      <Description>{t('game.fields.external_links.description')}</Description>
      <InputWrapper>
        <InputLabel label={t('game.fields.external_links.site')} required />
        <Input
          name="socialLinksMap.site.url"
          value={value.site?.url}
          onChange={handleChange}
          placeholder={gameSitePlacehholder}
          error={touched && !!error}
          onBlur={handleBlur}
        />
        <InputError color={RED_500}>{touched ? error : ''}</InputError>
      </InputWrapper>
      {socialLinks.map(linkType => (
        <ExternalLink
          key={linkType}
          type={linkType}
          name={`socialLinksMap.${linkType}.url`}
          url={value[linkType].url}
          onDelete={handleDeleteLink}
          onChange={handleChange}
        />
      ))}
      {missingLinks.length > 0 && (
        <Links>
          {missingLinks.map(type => (
            <AddLink type="button" key={type} data-type={type} onClick={handleAddLink}>
              {`+ ${t(`game.fields.external_links.${type}`)}`}
            </AddLink>
          ))}
        </Links>
      )}
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ExternalLinks, areEqual);

const Wrapper = styled.div``;

const AddLink = styled(PurpleOutlinedButton)`
  margin: 0 4px 4px 0;

  :last-child {
    margin-right: 0;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;
