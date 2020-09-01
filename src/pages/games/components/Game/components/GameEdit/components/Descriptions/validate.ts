const EMPTY_DESCRIPTION = '<p><br></p>';

export default (values: any) => {
  const errors: Record<string, any> = {};

  Object.keys(values.descriptions).forEach(key => {
    if (!values.descriptions[key]?.description || values.descriptions[key].description === EMPTY_DESCRIPTION) {
      errors.descriptions = errors.descriptions || {};
      errors.descriptions[key] = 'errors.empty_field';
    }
  });

  Object.keys(values.summaries).forEach(key => {
    if (!values.summaries[key]?.summary) {
      errors.summaries = errors.summaries || {};
      errors.summaries[key] = 'errors.empty_field';
    }
  });

  if (!values.socialLinksMap.site?.url) {
    errors.socialLinksMap = { site: 'errors.empty_field' };
  }

  return errors;
};
