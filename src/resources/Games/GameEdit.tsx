import React from 'react';
import { Edit, SelectArrayInput, RadioButtonGroupInput, SimpleFormIterator, ArrayInput, TextInput, TabbedForm, FormTab, translate, DateInput, CheckboxGroupInput } from 'react-admin';
import { Typography } from '@material-ui/core';
import GameGeneral from './GameGeneral';
import GameDescription from './GameDescription';
import GameRatings from './GameRatings';
import GameMedia from './GameMedia';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Languages from './GameGeneral/components/Languages';
import Genres from './GameGeneral/components/Genres';
import Tags from './GameGeneral/components/Tags';
import Features from './GameGeneral/components/Features';
import Controllers from './GameGeneral/components/Controllers';
import Platforms from './GameGeneral/components/Platforms';
import { compose } from 'recompose';
import { languageChoises, genreChoises, playerFeatures, platformFeatures, controllerChoises } from './const';

const GameTitle = ({ record }: any) => {
  return record ? <Typography variant="title">{record.name}</Typography> : null;
};

const styles = createStyles({
  paper: {
    padding: 12,
    width: '100%',
    marginBottom: 8,
  },
});

const GameEdit = (props: any) => {
  const { classes, translate } = props;
  return (
    <Edit title={<GameTitle />} {...props}>
      <TabbedForm>
        <FormTab label="resources.games.tabs.general">
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
            <Typography variant="subheading">
              {translate('resources.games.fields.supportedLanguages.label')}
            </Typography>
            <CheckboxGroupInput source="eng" choices={languageChoises} />
            <CheckboxGroupInput source="fra" choices={languageChoises} />
            <CheckboxGroupInput source="spn" choices={languageChoises} />
          </div>
          <div className={classes.paper}>
            <Typography variant="subheading">
              {translate('resources.games.fields.genres.label')}
            </Typography>
            <Typography variant="caption">
              {translate('resources.games.fields.genres.description')}
            </Typography>
            <SelectArrayInput
              label="resources.games.fields.genres.rolePlaying"
              source="genres"
              choices={genreChoises}
              fullWidth
            />
          </div>
          <div className={classes.paper}>
            <Typography variant="subheading">
              {translate('resources.games.fields.tags.label')}
            </Typography>
            <Typography variant="caption">
              {translate('resources.games.fields.tags.description')}
            </Typography>
            <ArrayInput source="tags">
              <SimpleFormIterator>
                <TextInput source="tag" />
              </SimpleFormIterator>
            </ArrayInput>
          </div>
          <div className={classes.paper}>
            <DateInput
              source="releaseDate"
              label="resources.games.fields.releaseDate.label"
              helperText={translate('resources.games.fields.releaseDate.description')}
            />
          </div>
          <div className={classes.paper}>
            <Typography variant="subheading">
              {translate('resources.games.fields.featuresSupported.label')}
            </Typography>
            <Typography variant="caption">
              {translate('resources.games.fields.featuresSupported.description')}
            </Typography>
            <CheckboxGroupInput
              label="resources.games.fields.featuresSupported.numberPlayers"
              source="players"
              choices={playerFeatures}
            />
            <CheckboxGroupInput
              label="resources.games.fields.featuresSupported.platformFeatures"
              source="players"
              choices={platformFeatures}
            />
          </div>
          <div className={classes.paper}>
            <RadioButtonGroupInput source="controllers" choices={controllerChoises} optionText={<ControllerField />} />
          </div>
          <div className={classes.paper}>
            <Platforms />
          </div>
        </FormTab>
        <FormTab label="resources.games.tabs.description">
          <TextInput source="title" label="resources.games.fields.title" fullWidth />
        </FormTab>
        <FormTab label="resources.games.tabs.ratings">
          <TextInput source="title" label="resources.games.fields.title" fullWidth />
        </FormTab>
        <FormTab label="resources.games.tabs.media">
          <TextInput source="title" label="resources.games.fields.title" fullWidth />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default compose(
  withStyles(styles),
  translate
)(GameEdit);

const ControllerField = translate((props: any) => {
  const { record: { id }, translate } = props;
  return (
    <>
      <h5>{translate(`resources.games.fields.controllers.${id}.label`)}</h5>
      <span>{translate(`resources.games.fields.controllers.${id}.description`)}</span>
    </>
  );
});
