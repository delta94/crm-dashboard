import React, { useState, useEffect } from 'react';
import { Typography, Collapse, IconButton, makeStyles, createStyles, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ImageUploader from './ImageUploader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    open: {
      transform: 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    cover: {
      cursor: 'pointer',
    },
  }));

interface Props {
  title: string;
  type: string;
  src: string;
  onChangeId: (type: string, id: number) => void;
}

const Cover = (props: Props) => {
  const { title, type, onChangeId } = props;
  const [src, setSrc] = useState(props.src);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setSrc(props.src);
  }, [props.src]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={toggleOpen}
      className={classes.cover}
    >
      <Typography gutterBottom variant="h6">
        {title}
        <IconButton
          className={open ? classes.open : undefined}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Typography>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ImageUploader type={type} onChangeId={onChangeId} src={src} />
      </Collapse>
    </div>
  );
};

export default React.memo(Cover);
