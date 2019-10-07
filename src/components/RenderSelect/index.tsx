import React from 'react';
import { Select, FormHelperText, FormControl } from '@material-ui/core';

const RenderSelect = ({
  input,
  meta: { touched, error },
  children,
  ...custom
}: any) => {
  return (
    <FormControl error={touched && !!error} fullWidth>
      <Select
        fullWidth
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          input.onChange(event.target.value);
        }}
        {...custom}
        {...input}
      >
        {children}
      </Select>
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default RenderSelect;
