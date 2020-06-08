import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Typography,
  Box,
  makeStyles,
  FormGroup,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles({
  select: {
    minWidth: 160,
    marginBottom: 16,
  },
  field: {
    marginBottom: 16,
  },
  halfField: {
    width: '50%',
  },
  root: {
    paddingRight: 12,
  },
});

interface Props {
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  title: string;
}

const Requirements = (props: Props) => {
  const { value = {}, onChange, title } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.field} variant="h6">
        {title}
      </Typography>
      <FormGroup className={classes.field}>
        <TextField
          name="requirements.os"
          label={t('games.fields.supportedPlatforms.system')}
          variant="outlined"
          value={value.cpu}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <TextField
          name="requirements.cpu"
          label={t('games.fields.supportedPlatforms.processor')}
          variant="outlined"
          value={value.cpu}
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup className={classes.field}>
        <TextField
          name="requirements.gpu"
          label={t('games.fields.supportedPlatforms.graphics')}
          variant="outlined"
          value={value.cpu}
          onChange={onChange}
        />
      </FormGroup>
      <div className={classes.field}>
        <TextField
          name="requirements.disk_space"
          type="number"
          label={t('games.fields.supportedPlatforms.storage')}
          variant="outlined"
          value={value.disk_space}
          onChange={onChange}
          className={classes.halfField}
        />
        <Select
          name="requirements.diskSpaceUnit"
          variant="outlined"
          value={value.cpu}
          onChange={onChange}
          className={classes.halfField}
          defaultValue={1}
        >
          <MenuItem value={1}>Mb</MenuItem>
          <MenuItem value={1024}>Gb</MenuItem>
        </Select>
      </div>
      <div className={classes.field}>
        <TextField
          name="requirements.ram"
          type="number"
          label={t('games.fields.supportedPlatforms.memory')}
          variant="outlined"
          value={value.ram}
          onChange={onChange}
          className={classes.halfField}
        />
        <Select
          name="requirements.ramUnit"
          variant="outlined"
          value={value.cpu}
          onChange={onChange}
          className={classes.halfField}
          defaultValue={1}
        >
          <MenuItem value={1}>Mb</MenuItem>
          <MenuItem value={1024}>Gb</MenuItem>
        </Select>
      </div>
    </Box>

  );
};

export default React.memo(Requirements);
