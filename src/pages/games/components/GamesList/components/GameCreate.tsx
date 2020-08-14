import React, { useState } from 'react';
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
  FormControlLabel,
  Switch,
  IconButton,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { createOrUpdateGameRequest } from 'api/games';
import { useHistory } from 'react-router-dom';
import { gameTypes } from 'const';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const useStyles = makeStyles({
  field: {
    marginBottom: 16,
    minWidth: 340,
  },
  alert: {
    position: 'absolute',
    marginTop: '20%',
    width: '100%',
    zIndex: 5,
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
  const { open, onClose, onCreate } = props;
  const classes = useStyles();
  const [errorText, setErrorText] = useState('');
  const { t } = useTranslation();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      type: '',
      open: false,
    },
    onSubmit: async (values: any, { resetForm }) => {
      const { open, ...rest } = values;

      const { error, json } = await createOrUpdateGameRequest({ ...rest });

      if (error) {
        setErrorText(error.message);
        return;
      }

      if (open && json?.id) {
        history.push(`/games/${json.id}`);
      }

      onCreate();
      resetForm();
      setErrorText('');
      onClose();
    },
    validate,
  });

  const handleCancell = () => {
    formik.resetForm();
    setErrorText('');
    onClose();
  };

  const handleCloseError = () => setErrorText('');

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{t('games.create')}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <FormGroup className={classes.field}>
            <TextField
              error={formik.touched.title && !!formik.errors.title}
              name="title"
              label={t('games.fields.title')}
              variant="outlined"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.title}
            />
          </FormGroup>
          <FormGroup className={classes.field}>
            <TextField
              error={formik.touched.slug && !!formik.errors.slug}
              name="slug"
              label={t('games.fields.slug')}
              variant="outlined"
              value={formik.values.slug}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.slug}
            />
          </FormGroup>
          <FormGroup className={classes.field}>
            <FormControl
              variant="outlined"
              error={formik.touched.type && !!formik.errors.type}
            >
              <InputLabel>{t('games.fields.type')}</InputLabel>
              <Select
                name="type"
                label={t('games.fields.type')}
                variant="outlined"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {gameTypes.map(type => (
                  <MenuItem value={type} key={type}>{type}</MenuItem>
                ))}
              </Select>
              {!!formik.errors.type && (
                <FormHelperText>{formik.errors.type}</FormHelperText>
              )}
            </FormControl>
          </FormGroup>
          <FormGroup className={classes.field}>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.open}
                  onChange={formik.handleChange}
                  name="open"
                  color="primary"
                />
              }
              label={t('openOnCreate')}
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
      {!!errorText &&
        (<Alert
          severity="error"
          className={classes.alert}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          {errorText}
        </Alert>
        )}
    </Dialog>

  );
};

export default React.memo(GameCreate);
