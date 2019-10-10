import React from 'react';
import { TextField } from '@material-ui/core';

const RenderTextArea = ({
  meta: { touched, error } = {} as any,
  input: { ...inputProps },
  ...props
}: any) => (
    <TextField
      error={!!(touched && error)}
      helperText={touched && error}
      rows={3}
      fullWidth
      multiline
      {...inputProps}
      {...props}
    />
  );

export default RenderTextArea;
