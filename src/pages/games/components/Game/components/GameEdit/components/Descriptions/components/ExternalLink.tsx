import React, { SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { InputWrapper } from 'pages/games/components/Game/styles';
import InputLabel from 'components/InputLabel';
import { Input, buttonStyles, DeleteIcon } from 'admin-library';

const getPlaceholder = (type: string) => {
  return `eg. https://www.${type === 'vkontakte' ? 'vk' : type}.com/mygameaddress/?ref=qilin`;
};

interface Props {
  className?: string;
  name: string;
  type: string;
  url: string;
  onDelete: (type: string) => void;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const ExternalLink = (props: Props) => {
  const { className, name, type, url, onChange, onDelete } = props;
  const { t } = useTranslation();

  const handleDelete = () => {
    onDelete(type);
  };

  return (
    <InputWrapper className={className}>
      <InputLabel label={t(`game.fields.external_links.${type}`)} />
      <Line>
        <Input 
          name={name}
          value={url}
          onChange={onChange}
          placeholder={getPlaceholder(type)}
        />
        <DeleteButton onClick={handleDelete}>
          <DeleteIcon />
        </DeleteButton>
      </Line>
    </InputWrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ExternalLink, areEqual);

const Line = styled.div`
  display: flex;
`;

const DeleteButton = styled.button.attrs({ color: 'transparent' })`
  ${buttonStyles}
  border-radius: 2px;
  /* border: 1px solid; */

  :hover {
    
  }
`;
