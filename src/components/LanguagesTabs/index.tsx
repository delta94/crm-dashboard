import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguagesState } from 'containers/Languages';
import { Loader, TagList, Chip, PURPLE_500, BLACK_800, PlusIcon, GRAY_100, Caption12, BLACK_500 } from 'admin-library';

const DEFAULT_LANG_ID = 2;

interface ComponentProps<T> {
  className?: string;
  value: T;
  onChange: (name: string, value: any) => void;
  name: string;
}

interface Props<T> {
  className?: string;
  value: Record<string, T>;
  Component: React.ComponentType<ComponentProps<T>>;
  onChange: (name: string, value: any) => void;
  name: string;
}

function LanguagesTabs<M extends { language_id: number }>(props: Props<M>): JSX.Element | null {
  const { className, value, Component, onChange, name } = props;
  const [active, setActive] = useState(DEFAULT_LANG_ID);
  const [open, setOpen] = useState(false);
  const { loading, languages } = useLanguagesState();
  const { t } = useTranslation();

  const selectedLanguages = Object.keys(value)
    .map(Number)
    .filter(id => id !== DEFAULT_LANG_ID);

  const languageTags = selectedLanguages.map(id => ({
    id,
    name: t(`languages.${id}`).slice(0, 2).toUpperCase(),
  }));

  const allLanguageTags = useMemo(() => languages
    .filter(({ id }) => id !== DEFAULT_LANG_ID)
    .map(({ id }) => ({
      id,
      name: t(`languages.${id}`),
      // eslint-disable-next-line
    })), [languages]);

  const handleChangeActiveLang = ({ id }: { id: number }) => {
    setActive(id);
  };

  const handleSetEnglish = () => {
    setActive(DEFAULT_LANG_ID);
  };

  const handleChangeLanguages = (ids: number[]) => {
    const newValue = ids.reduce((acc, id) => {
      const stringId = String(id);
      acc[stringId] = stringId in value ? value[stringId] : { language_id: id };

      return acc;
    }, { [String(DEFAULT_LANG_ID)]: value[String(DEFAULT_LANG_ID)] } as Record<string, any>);
    onChange(name, newValue);
  };

  const handleDeleteLanguage = ({ id }: { id: number }) => {
    const newValue = { ...value };
    delete newValue[String(id)];
    onChange(name, newValue);
    if (id === active) {
      setActive(DEFAULT_LANG_ID);
    }
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!value[String(DEFAULT_LANG_ID)]) {
      onChange(name, {
        ...value,
        [String(DEFAULT_LANG_ID)]: { language_id: DEFAULT_LANG_ID },
      });
      
      handleChangeLanguages([DEFAULT_LANG_ID]);
    }
    // eslint-disable-next-line
  }, []);

  if (!value[String(DEFAULT_LANG_ID)]) return null;

  if (loading) return <Loader />;

  return (
    <Wrapper className={className}>
      {Object.keys(value).map(id => Number(id) === active ? (
        <Component value={value[active]} onChange={onChange} name={`${name}[${active}]`} />
      ) : null)}
      <Languages>
        <English active={active === DEFAULT_LANG_ID} onClick={handleSetEnglish}>
          {t(`languages.${DEFAULT_LANG_ID}`).slice(0, 2).toUpperCase()}
        </English>
        {languageTags.map(tag => (
          <Chip
            key={tag.id}
            chip={tag}
            onDelete={handleDeleteLanguage}
            onClick={handleChangeActiveLang}
            active={tag.id === active}
          />
        ))}
        <AddLanguage
          onClick={toggleOpen}
          onBlur={handleBlur}
          tabIndex={1}
        >
          <ChangeLanguage open={open}>
            <AddIcon />
          </ChangeLanguage>
          <Menu open={open}>
            <TagList
              tags={allLanguageTags}
              selected={selectedLanguages}
              onChange={handleChangeLanguages}
            />
          </Menu>
        </AddLanguage>
      </Languages>
    </Wrapper>
  );
}

export default React.memo(LanguagesTabs);

const Wrapper = styled.div`
  
`;

const English = styled(Caption12)<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${({ active }) => active ? PURPLE_500 : GRAY_100};
  margin-right: 4px;
  margin-bottom: 4px;
  padding: 3px 8px;
  border-radius: 2px;
  cursor: pointer;
`;

const Languages = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const AddLanguage = styled.div`
  display: inline-block;
  position: relative;
  outline: none;
  margin-bottom: 4px;
`;

const AddIcon = styled(PlusIcon)``;

const ChangeLanguage = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border: 1px solid ${({ open }) => open ? PURPLE_500 : BLACK_500};
  border-radius: 2px;
  cursor: pointer;

  ${AddIcon} {
    path {
      fill: ${({ open }) => open ? PURPLE_500 : GRAY_100};
    }
  }
`;

const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  margin-top: 4px;
  top: 100%;
  left: 0;
  z-index: 5;
  background-color: ${BLACK_800};
  border-radius: 2px;
  display: ${({ open }) => open ? 'block' : 'none'};
  overflow-y: auto;
`;
