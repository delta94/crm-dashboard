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
    <SimpleForm redirect="list">
      <Paper className={classes.paper}>
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
      </Paper>
      <Paper className={classes.paper}>
        <Languages />
      </Paper>
      <Paper className={classes.paper}>
        <Genres />
      </Paper>
      <Paper className={classes.paper}>
        <Tags />
      </Paper>
      <Paper className={classes.paper}>
        <DateInput
          source="releaseDate"
          label="resources.games.fields.releaseDate.label"
          helperText={translate('resources.games.fields.releaseDate.description')}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Features />
      </Paper>
      <Paper className={classes.paper}>
        <Controllers />
      </Paper>
      <Paper className={classes.paper}>
        <Platforms />
      </Paper>
    </SimpleForm>
  );
};

export default compose(
  withStyles(styles),
  translate
)(GameGeneral);
