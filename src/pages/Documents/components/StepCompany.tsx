import React from 'react';
import compose from 'recompose/compose';
import { TranslationContextProps, translate } from 'ra-core';
import Button from '@material-ui/core/Button';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import { CardActions, InputLabel, MenuItem } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { lightTheme } from 'components/Layout/themes';
import { RenderInput, RenderSelect } from 'components';

import { styles } from './styles';
import validate from '../validate';

const mockCountries = [{ name: 'Russia', value: 'Russia' }];

interface Props {
  classes?: any;
  countries?: any[];
  initialValues: any;
  disabled: boolean;
  onSubmit: () => void;
}

const StepCompany = (props: Props & InjectedFormProps & TranslationContextProps) => {
  const {
    classes, translate, handleSubmit, disabled, countries = mockCountries,
  } = props;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.input}>
          <Field
            autoFocus
            disabled={disabled}
            name="name"
            component={RenderInput}
            label={translate('pages.documents.companyForm.name')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="alternativeName"
            component={RenderInput}
            label={translate('pages.documents.companyForm.alternativeName')}
          />
        </div>
        <div className={classes.input}>
          <InputLabel htmlFor="country">{translate('pages.documents.companyForm.country')}</InputLabel>
          <Field disabled={disabled} name="country" component={RenderSelect} label="country">
            <MenuItem key="default" value="">{translate('pages.documents.companyForm.countriesPlaceholder')}</MenuItem>
            {countries.map(({ name, value }) => (
              <MenuItem key={name} value={value}>{name}</MenuItem>
            ))}
          </Field>
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="region"
            component={RenderInput}
            label={translate('pages.documents.companyForm.region')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="zip"
            component={RenderInput}
            label={translate('pages.documents.companyForm.zip')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="city"
            component={RenderInput}
            label={translate('pages.documents.companyForm.city')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="address"
            component={RenderInput}
            label={translate('pages.documents.companyForm.address')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="additionalAddress"
            component={RenderInput}
            label={translate('pages.documents.companyForm.additionalAddress')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="registrationNumber"
            component={RenderInput}
            label={translate('pages.documents.companyForm.registrationNumber')}
          />
        </div>
        <div className={classes.input}>
          <Field
            disabled={disabled}
            name="taxId"
            component={RenderInput}
            label={translate('pages.documents.companyForm.taxId')}
          />
        </div>
        <CardActions className={classes.actions}>
          <Button variant="contained" color="primary" type="submit">
            {translate('pages.documents.nextStepButton')}
          </Button>
        </CardActions>
      </form>
    </div>
  );
};

const enhance = compose<Props & InjectedFormProps & TranslationContextProps, {}>(
  translate,
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    enableReinitialize: true,
    validate,
  }),
  withStyles(styles),
);

const EnhancedStepCompany = enhance(StepCompany);

const StepCompanyWithTheme = (props: Props) => (
  <MuiThemeProvider theme={createMuiTheme(lightTheme)}>
    <EnhancedStepCompany {...props} />
  </MuiThemeProvider>
);

export default StepCompanyWithTheme;
