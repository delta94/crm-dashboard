import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { FormControl, Modal, OutlinedInput } from '@material-ui/core';
import { createOrUpdateGameRequest } from 'api/games';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BLACK_700, BLACK_800, GRAY_100, H2, Caption12, RED_500, PurpleButton, CloseIcon } from 'admin-library';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const validate = (values: any) => {
  const errors: Record<string, string> = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.slug) {
    errors.slug = 'Required';
  }

  return errors;
};

const GameCreate = (props: Props) => {
  const { open, onClose, onCreate } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
    },
    onSubmit: async (values: any, { resetForm }) => {
      const { open, ...rest } = values;

      const { error, json } = await createOrUpdateGameRequest({ ...rest });

      if (error) {
        alert(error.message);
        return;
      }

      if (open && json?.id) {
        history.push(`/games/${json.id}`);
      }

      onCreate();
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
    <Modal open={open} onClose={handleCancell}>
      <Form onSubmit={formik.handleSubmit}>
        <StyledCloseIcon onClick={handleCancell} />
        <Title>{t('games.create')}</Title>
        <Label color={GRAY_100}>{t('games.fields.title')}</Label>
        <StyledFormControl fullWidth>
          <Input
            error={formik.touched.title && !!formik.errors.title}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorText color={RED_500}>
            {formik.touched.title ? formik.errors.title : ''}
          </ErrorText>
        </StyledFormControl>
        <Label color={GRAY_100}>{t('games.fields.url')}</Label>
        <StyledFormControl fullWidth>
          <Input
            error={formik.touched.slug && !!formik.errors.slug}
            name="slug"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorText color={RED_500}>
            {formik.touched.slug ? formik.errors.slug : ''}
          </ErrorText>
        </StyledFormControl>
        <CreateButton type="submit">
          {t('continue')}
        </CreateButton>
      </Form>
    </Modal>
  );
};

export default React.memo(GameCreate);

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 396px;
  background-color: ${BLACK_800};
  outline: none;
  border-radius: 4px;
  padding: 24px 32px 32px;
`;

const Title = styled(H2)`
  margin: 0 0 24px;
  text-align: center;
`;

const Label = styled(Caption12)`
  display: block;
  margin-bottom: 4px;
`;

const StyledFormControl = styled(FormControl)`
  margin-bottom: 6px;
`;

const ErrorText = styled(Caption12)`
  height: 18px;
`;

const Input = styled(OutlinedInput)`
  && {
    background-color: ${BLACK_700};
    color: ${GRAY_100};
    height: 40px;
    font-size: 14px;
    line-height: 22px;
  }

  && .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const CreateButton = styled(PurpleButton)`
  && {
    margin: 8px 0 0 auto;
    padding: 12px 20px;
    display: block;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :active {
    opacity: 1;
  }
`;
