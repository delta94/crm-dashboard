import React from 'react';
import {
  FormTab,
  translate,
  FormDataConsumer,
} from 'react-admin';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import compose from 'recompose/compose';
import ImageInput from './components/ImageInput';

const styles = createStyles({
  paper: {
    padding: 12,
    width: '100%',
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
  },
});

const GameMedia = (props: any) => {
  const { translate, classes } = props;

  return (
    <>
      <div className={classes.paper}>
        <Typography variant="subheading" className={classes.title}>
          {translate('resources.games.fields.description.label')}
        </Typography>
      </div>
      <FormDataConsumer>
        {({ formData }: any) => {
          console.log(formData);
          return null;
        }}
      </FormDataConsumer>
      <ImageInput source="media" />
    </>
  );
};

export default compose(
  withStyles(styles),
  translate
)(GameMedia);
