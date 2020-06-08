import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import {
  makeStyles,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

interface Props {
  open: boolean;
  onClose: () => void;
}

const gameTypes = ['desktop', 'web'];

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
          <FormControl
            variant="outlined"
            error={!!formik.errors.type}
            className={classes.field}
          >
            <InputLabel>{t('games.fields.type')}</InputLabel>
            <Select
              name="type"
              label={t('games.fields.type')}
              variant="outlined"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              {gameTypes.map(type => (
                <MenuItem value={type} key={type}>{type}</MenuItem>
              ))}
            </Select>
            {formik.errors.type && (
              <FormHelperText>{formik.errors.type}</FormHelperText>
            )}
          </FormControl>
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
