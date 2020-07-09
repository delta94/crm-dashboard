import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cell: {
    maxWidth: 50,
    width: '15%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    '&:first-child': {
      width: '10%',
    },
  },
});
