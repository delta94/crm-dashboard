import { gamePlatforms } from 'const';

const fields = ['title', 'developers', 'publishers', 'release_date'];
const requirementsFields = ['os', 'gpu', 'cpu', 'ram', 'disk_space'];

export default (values: any) => {
  const errors: Record<string, any> = {};

  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'errors.empty_field';
    }
  });

  let requirementsValid = true;

  gamePlatforms.forEach(platform => {
    if (!values.requirements[platform]) return;

    errors.requirements = errors.requirements || {};
    
    errors.requirements={
      ...errors.requirements,
      [platform]: {
        minimal: {},
        recommended: {},
      },
    };

    requirementsFields.forEach(field => {
      if (!values.requirements[platform]?.minimal[field]) {
        errors.requirements[platform].minimal[field] = 'errors.empty_field';
        requirementsValid = false;
      }

      if (!values.requirements[platform]?.recommended[field]) {
        errors.requirements[platform].recommended[field] = 'errors.empty_field';
        requirementsValid = false;
      }
    });
  });

  if (requirementsValid) {
    delete errors.requirements;
  }

  return errors;
};
