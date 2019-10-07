import React from 'react';
import { TextField } from '@material-ui/core';

const RenderInput = ({
  meta: { touched, error } = {} as any,
  input: { ...inputProps },
  ...props
}: any) => (
    <TextField
      error={!!(touched && error)}
      helperText={touched && error}
      {...inputProps}
      {...props}
      fullWidth
    />
  );

export default RenderInput;
