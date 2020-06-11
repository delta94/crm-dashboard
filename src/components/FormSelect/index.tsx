import React from 'react';
import { Select, MenuItem, Box, Typography, makeStyles, FormControl, InputLabel } from '@material-ui/core';
import { NameWithId } from 'types/games';

const useStyles = makeStyles({
  select: {
    minWidth: 160,
    marginBottom: 16,
  },
});

interface Props {
  title?: string;
  label?: string;
  description?: string;
  name: string;
  options: NameWithId[];
  value: number[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

const FormSelect = (props: Props) => {
  const { options, value, onChange, title, description, name, label } = props;
  const classes = useStyles();

  return (
    <Box>
      {title && (
        <Typography gutterBottom variant="h6">{title}</Typography>
      )}
      {description && (
        <Typography gutterBottom variant="body1">{description}</Typography>
      )}
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          name={name}
          className={classes.select}
          label={label}
          multiple
        >
          {options.map(({ id, name }) => (
            <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </Select>

      </FormControl>
    </Box>
  );
};

export default React.memo(FormSelect);
