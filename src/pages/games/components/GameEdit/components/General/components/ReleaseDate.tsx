import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Typography, Box } from '@material-ui/core';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const ReleaseDate = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        {t('games.fields.releaseDate.label')}
      </Typography>
      <Typography gutterBottom variant="body1">
        {t('games.fields.releaseDate.description')}
      </Typography>
      <TextField
        type="date"
        variant="outlined"
        name="release_date"
        value={value.slice(0, 10)}
        onChange={onChange}
      />
    </Box>

  );
};

export default React.memo(ReleaseDate);
