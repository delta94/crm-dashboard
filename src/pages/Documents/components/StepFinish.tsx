import React from 'react';
import compose from 'recompose/compose';
import { translate, TranslationContextProps } from 'ra-core';
import { withStyles } from '@material-ui/core/styles';
import { CardActions, Typography, Button } from '@material-ui/core';
import { reduxForm, InjectedFormProps } from 'redux-form';

import validate from '../validate';
import { styles } from './styles';

interface Props {
  classes?: any;
  disabled: boolean;
  onSubmit: (values: any) => void;
  onPrev: () => void;
}

const StepFinish = (props: Props & InjectedFormProps & TranslationContextProps) => {
  const { classes, translate, handleSubmit, onPrev } = props;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Typography className={classes.warning} variant="title">
          {translate('pages.documents.status.draft.beforeSubmit')}
        </Typography>
        <CardActions className={classes.actions}>
          <Button
            onClick={onPrev}
            className={classes.backButton}
          >
            {translate('pages.documents.prevStepButton')}
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {translate('pages.documents.nextStepButton')}
          </Button>
        </CardActions>
      </form>
    </div>
  );
};

const enhance = compose<Props & InjectedFormProps & TranslationContextProps, any>(
  translate,
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    validate,
  }),
  withStyles(styles)
);

export default enhance(StepFinish);
