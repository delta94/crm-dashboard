import React from 'react';
import {
  SimpleForm,
  TextInput,
  translate,
  LongTextInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
} from 'react-admin';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import compose from 'recompose/compose';
import MarkdownInput from 'ra-input-markdown';

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

const GameDescription = (props: any) => {
  const { translate, classes } = props;

  return (
    <SimpleForm redirect="list">
      <Paper className={classes.paper}>
        <LongTextInput
          source="summary"
          label="resources.games.fields.summary.label"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="subheading" className={classes.title}>
          {translate('resources.games.fields.description.label')}
        </Typography>
        <MarkdownInput source="desription" />
      </Paper>
      <Paper className={classes.paper}>
        <ArrayInput source="review">
          <SimpleFormIterator>
            <TextInput
              source="review.press_name"
              label="resources.games.fields.review.pressName"
            />
            <TextInput
              source="review.link"
              label="resources.games.fields.review.link"
              type="url"
            />
            <NumberInput
              source="review.score"
              label="resources.games.fields.review.score"
            />
            <TextInput
              source="review.quote"
              label="resources.games.fields.review.quote"
            />
          </SimpleFormIterator>
        </ArrayInput>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="subheading" className={classes.title}>
          {translate('resources.games.fields.socialLinks.label')}
        </Typography>
        <TextInput
          source="social_links.facebook"
          label="resources.games.fields.socialLinks.facebook"
          type="url"
          fullWidth
        />
        <TextInput
          source="social_links.twitter"
          label="resources.games.fields.socialLinks.twitter"
          type="url"
          fullWidth
        />
        <TextInput
          source="social_links.twitch"
          label="resources.games.fields.socialLinks.twitch"
          type="url"
          fullWidth
        />
        <TextInput
          source="social_links.youTube"
          label="resources.games.fields.socialLinks.youTube"
          type="url"
          fullWidth
        />
        <TextInput
          source="social_links.discord"
          label="resources.games.fields.socialLinks.discord"
          type="url"
          fullWidth
        />
        <TextInput
          source="social_links.reddit"
          label="resources.games.fields.socialLinks.reddit"
          type="url"
          fullWidth
        />
      </Paper>
    </SimpleForm>
  );
};

export default compose(
  withStyles(styles),
  translate
)(GameDescription);
