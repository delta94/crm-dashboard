import React from 'react';
import compose from 'recompose/compose';
import { TranslationContextProps, translate } from 'ra-core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { CardActions, InputLabel, MenuItem } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RenderInput, RenderSelect, RenderTextArea } from 'components';

import { styles } from './styles';
import validate from '../validate';

const defaultCurrensies = [{ value: 'USD', name: 'United States Dollar' }];

interface Currency {
  value: string;
  name: string;
}

interface Props {
  classes?: any;
  currensies?: Currency[];
  disabled: boolean;
  onSubmit: () => void;
  onPrev: () => void;
}

const StepCompany = (props: Props & InjectedFormProps & TranslationContextProps) => {
  const {
    classes, translate, handleSubmit, disabled, onPrev, currensies = defaultCurrensies,
  } = props;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.input}>
          <InputLabel htmlFor="currency">{translate('pages.documents.bankingForm.currency')}</InputLabel>
          <Field name="currency" component={RenderSelect} disabled={disabled}>
            {currensies.map(({ name, value }) => (
              <MenuItem key={value} value={value}>{name}</MenuItem>
            ))}
          </Field>
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="bankName"
            component={RenderInput}
            label={translate('pages.documents.bankingForm.name')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="accountNumber"
            component={RenderInput}
            label={translate('pages.documents.bankingForm.accountNumber')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="swift"
            component={RenderInput}
            label={translate('pages.documents.bankingForm.swift')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="bankAdress"
            component={RenderTextArea}
            label={translate('pages.documents.bankingForm.address')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="details"
            component={RenderTextArea}
            label={translate('pages.documents.bankingForm.details')}
          />
        </div>
        <CardActions className={classes.actions}>
          <Button
            onClick={onPrev}
            className={classes.backButton}
          >
            {translate('pages.documents.prevStepButton')}
          </Button>
          {!disabled && (
            <Button variant="contained" color="primary" type="submit">
              {translate('pages.documents.nextStepButton')}
            </Button>
          )}
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
