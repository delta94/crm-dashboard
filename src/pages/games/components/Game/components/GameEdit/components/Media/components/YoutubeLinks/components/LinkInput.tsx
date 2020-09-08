import React, { SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import InputLabel from 'components/InputLabel';
import { LINK_PLACEHOLDER } from 'const';
import {
  Input,
  SquareIconButton,
  DeleteIcon,
  RED_500,
  CloseIcon,
  useDebounce,
  DragIcon,
  PURPLE_500,
} from 'admin-library';

interface Props {
  className?: string;
  link: string;
  index: number;
  name: string;
  dragHandleProps?: any;
  onChange: (name: string, value: string) => void;
  onDelete: (index: number) => void;
}

const LinkInput = (props: Props) => {
  const { className, link, index, name, onDelete, onChange, dragHandleProps = {} } = props;
  const { t } = useTranslation();
  const debouncedLink = useDebounce(link, 1000);

  console.log(debouncedLink);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    onChange(name, value);
  };

  const handleClear = () => {
    onChange(name, '');
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <Wrapper className={className}>
      <InputLabel label={t('game.fields.game_video.youtube_link')} />
      <Line>
        <InputWrapper>
          <StyledInput
            value={link}
            onChange={handleChange}
            name={name}
            placeholder={LINK_PLACEHOLDER}
          />
          {link?.length > 0 && <ClearIcon onClick={handleClear} />}
        </InputWrapper>
        <Button 
          type="button"
          color={PURPLE_500}
          {...dragHandleProps}
        >
          <DragIcon />
        </Button>
        <Button type="button" onClick={handleDelete} color={RED_500}>
          <DeleteIcon />
        </Button>
      </Line>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(LinkInput, areEqual);

const Wrapper = styled.div``;

const Line = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const StyledInput = styled(Input)`
  padding-right: 30px;
`;

const ClearIcon = styled(CloseIcon)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }
`;

const Button = styled(SquareIconButton)`
  margin-left: 8px;
  flex-shrink: 0;
`;
