import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" paddingTop="40px">
      <CircularProgress color="primary" />
    </Box>
  );
};

export default React.memo(Loader);
