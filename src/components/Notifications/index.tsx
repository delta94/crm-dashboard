import React, { useState } from 'react';
import { IconButton, Paper, List, ListItem, ListItemText, ClickAwayListener } from '@material-ui/core';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = createStyles({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 45,
    right: 0,
    width: 320,
  },
});

const Notifications = (props: WithStyles<typeof styles>) => {
  const { classes } = props;
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const handleClickAway = () => setOpen(false);

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <IconButton onClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
          {isOpen ? (
            <Paper className={classes.paper}>
              <List>
                <ListItem button>
                  <ListItemText primary="В Гидрометцентре пообещали россиянам теплый ноябрь" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Численность сотрудников МВД сократилась из-за пенсионной реформы" />
                </ListItem>
              </List>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default withStyles(styles)(Notifications);
