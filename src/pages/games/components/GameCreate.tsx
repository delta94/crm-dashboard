import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { makeStyles, FormGroup } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Props {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
    minWidth: 340,
  },
});

const validate = (values: any) => {
  const errors: Record<string, string> = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.slug) {
    errors.slug = 'Required';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  return errors;
};

const GameCreate = (props: Props) => {
  const { open, onClose } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      type: '',
    },
    onSubmit: (values: any, { resetForm }) => {
      console.log(values);

      resetForm();
      onClose();
    },
    validate,
  });

  const handleCancell = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{t('games.create')}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <FormGroup className={classes.field}>
            <TextField
              error={!!formik.errors.title}
              name="title"
              label={t('games.fields.title')}
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              helperText={formik.errors.title}
            />
          </FormGroup>
          <FormGroup className={classes.field}>
            <TextField
              error={!!formik.errors.slug}
              name="slug"
              label={t('games.fields.slug')}
              variant="outlined"
              value={formik.values.slug}
              onChange={formik.handleChange}
              helperText={formik.errors.slug}
            />
          </FormGroup>
          <FormGroup className={classes.field}>
            <TextField
              error={!!formik.errors.type}
              name="type"
              label={t('games.fields.type')}
              variant="outlined"
              value={formik.values.type}
              onChange={formik.handleChange}
              helperText={formik.errors.type}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancell} color="primary">
            {t('cancell')}
          </Button>
          <Button color="primary" type="submit" variant="contained">
            {t('create')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
};

export default React.memo(GameCreate);
