import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Controllers = (props: Props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        {t('games.fields.controllers.label')}
      </Typography>
      <RadioGroup name="controllers" value={value} onChange={onChange}>
        <FormControlLabel
          value="not_support"
          control={<Radio color="primary" />}
          label={t('games.fields.controllers.notSupported')}
        />
        <FormControlLabel
          value="partial_support"
          control={<Radio color="primary" />}
          label={t('games.fields.controllers.partiallySupported')}
        />
        <FormControlLabel
          value="full_support"
          control={<Radio color="primary" />}
          label={t('games.fields.controllers.fullSupport')}
        />
      </RadioGroup>
    </Box>

  );
};

export default React.memo(Controllers);
