import React from 'react';
import compose from 'recompose/compose';
import { TranslationContextProps, translate } from 'ra-core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { CardActions } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RenderInput } from 'components';

import { styles } from './styles';
import validate from '../validate';

interface Props {
  classes?: any;
  disabled: boolean;
  onSubmit: () => void;
  onPrev: () => void;
}

const StepCompany = (props: Props & InjectedFormProps & TranslationContextProps) => {
  const { classes, translate, handleSubmit, onPrev, disabled } = props;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.input}>
          <Field
            autoFocus
            disabled={disabled}
            name="authFullName"
            component={RenderInput}
            label={translate('pages.documents.contactForm.authorized.fullName')}
          />
        </div>
        <div className={classes.input}>
          <Field
            name="authPosition"
            disabled={disabled}
            component={RenderInput}
            label={translate('pages.documents.contactForm.authorized.position')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="authEmail"
            component={RenderInput}
            label={translate('pages.documents.contactForm.authorized.email')}
          />
        </div>
        <div className={classes.input}>
          <Field
            name="authPhone"
            disabled={disabled}
            component={RenderInput}
            label={translate('pages.documents.contactForm.authorized.phone')}
          />
        </div>
        <div className={classes.input}>
          <Field
            name="techFullName"
            disabled={disabled}
            component={RenderInput}
            label={translate('pages.documents.contactForm.technical.fullName')}
          />
        </div>
        <div className={classes.input}>
          <Field
            name="techEmail"
            disabled={disabled}
            component={RenderInput}
            label={translate('pages.documents.contactForm.technical.email')}
          />
        </div>
        <div className={classes.input}>
          <Field
            name="techPhone"
            disabled={disabled}
            component={RenderInput}
            label={translate('pages.documents.contactForm.technical.phone')}
          />
        </div>
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

export default enhance(StepCompany);
