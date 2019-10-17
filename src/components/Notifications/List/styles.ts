import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  list: {
    overflow: 'auto',
    maxHeight: 310,
  },
  alignContainer: {
    display: 'flex',
    height: 310,
    padding: '0 15px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    left: 10,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});

export default styles;
