import React from 'react';
import { SimpleForm, TextInput, DateInput, translate } from 'react-admin';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';

import Languages from './components/Languages';
import Genres from './components/Genres';
import Tags from './components/Tags';
import Features from './components/Features';
import Controllers from './components/Controllers';
import Platforms from './components/Platforms';

const styles = createStyles({
  paper: {
    padding: 12,
    width: '100%',
    marginBottom: 8,
  },
});

const GameGeneral = (props: any) => {
  const { translate, classes } = props;

  return (
    <>
      <div className={classes.paper}>
        <TextInput source="title" label="resources.games.fields.title" fullWidth />
        <TextInput
          source="developers"
          label="resources.games.fields.developers.label"
          helperText={translate('resources.games.fields.developers.description')}
          fullWidth
        />
        <TextInput
          source="publishers"
          label="resources.games.fields.publishers.label"
          helperText={translate('resources.games.fields.publishers.description')}
          fullWidth
        />
      </div>
      <div className={classes.paper}>
        <Languages />
      </div>
      <div className={classes.paper}>
        <Genres />
      </div>
      <div className={classes.paper}>
        <Tags />
      </div>
      <div className={classes.paper}>
        <DateInput
          source="releaseDate"
          label="resources.games.fields.releaseDate.label"
          helperText={translate('resources.games.fields.releaseDate.description')}
        />
      </div>
      <div className={classes.paper}>
        <Features />
      </div>
      <div className={classes.paper}>
        <Controllers />
      </div>
      <div className={classes.paper}>
        <Platforms />
      </div>
    </>
  );
};

export default compose(
  withStyles(styles),
  translate
)(GameGeneral);
