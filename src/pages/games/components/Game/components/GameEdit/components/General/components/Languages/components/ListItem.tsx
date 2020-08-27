import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Localization } from 'types/games';
import { Checkbox } from 'admin-library';

import { Row, Cell, StyledDeleteIcon } from '../styles';

interface Props {
  lang: Localization;
  onChange: (name: string, value: any) => void;
  onDelete: (index: number) => void;
  index: number;
}

const ListItem = (props: Props) => {
  const { lang, onChange, onDelete, index } = props;
  const { t } = useTranslation();

  const handleDelete = () => {
    onDelete(lang.language_id);
  };

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.name, e.currentTarget.checked);
  };

  return (
    <Row>
      <Cell>
        {t(`languages.${lang.language_id}`)}
      </Cell>
      <Cell>
        <Checkbox
          name={`localization[${index}].interface`}
          checked={lang.interface}
          onChange={handleChange}
        />
      </Cell>
      <Cell>
        <Checkbox
          name={`localization[${index}].audio`}
          checked={lang.audio}
          onChange={handleChange}
        />
      </Cell>
      <Cell>
        <Checkbox
          name={`localization[${index}].subtitles`}
          checked={lang.subtitles}
          onChange={handleChange}
        />
      </Cell>
      <Cell>
        <StyledDeleteIcon onClick={handleDelete} />
      </Cell>
    </Row>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(ListItem, areEqual);
