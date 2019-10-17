import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    overflow: 'hidden',
    top: 45,
    right: 0,
    width: 320,
    height: 350,
  },
  header: {
    padding: 8,
    backgroundColor: theme.palette.grey[200],
  },
  badge: {
    right: -15,
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
  hidden: {
    visibility: 'hidden',
  },
});

export default styles;
