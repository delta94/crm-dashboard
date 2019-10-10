import { isEmailValid, isPhoneValid } from 'helpers';

export default (values: any, props: any) => {
  const errors: { [key: string]: string } = {};

  if (props.disabled) return errors;

  const fields = [
    'accountNumber', 'address', 'currency', 'name', 'swift', 'address',
    'city', 'country', 'name', 'region', 'registrationNumber', 'taxId',
    'zip', 'authEmail', 'authFullName', 'authPhone', 'authPosition', 'bankName',
  ];

  const { translate } = props;

  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = translate('ra.validation.required');
    }
  });

  if (values.authEmail && !isEmailValid(values.authEmail)) {
    errors.authEmail = translate('pages.documents.contactForm.invalidEmail');
  }

  if (values.authPhone && !isPhoneValid(values.authPhone)) {
    errors.authPhone = translate('pages.documents.contactForm.invalidPhone');
  }

  if (values.techEmail && !isEmailValid(values.techEmail)) {
    errors.techEmail = translate('pages.documents.contactForm.invalidEmail');
  }

  if (values.techPhone && !isPhoneValid(values.techPhone)) {
    errors.techPhone = translate('pages.documents.contactForm.invalidPhone');
  }

  return errors;
};
