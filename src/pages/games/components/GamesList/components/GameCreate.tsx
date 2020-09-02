import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Modal } from '@material-ui/core';
import { createOrUpdateGameRequest } from 'api/games';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { checkUrlString } from 'admin-library';
import {
  Input,
  BLACK_800,
  GRAY_100,
  H2,
  Caption12,
  RED_500,
  PurpleButton,
  CloseIcon,
  Micro10,
  Loader,
} from 'admin-library';
import { useSettingsState } from 'containers/Settings';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const validate = (values: any) => {
  const errors: Record<string, string> = {};

  if (!values.title) {
    errors.title = 'errors.empty_field';
  }

  if (!values.slug) {
    errors.slug = 'errors.empty_field';
  }

  if (!checkUrlString(values.slug)) {
    errors.slug = 'errors.not_url';
  }

  return errors;
};

const GameCreate = (props: Props) => {
  const { open, onClose, onCreate } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const { settings, loading } = useSettingsState();

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: `${settings.store_root_url}/`,
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

  if (loading) {
    return (
      <Wrapper><Loader /></Wrapper>
    );
  }

  const handleCancell = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleCancell}>
      <Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <StyledCloseIcon onClick={handleCancell} />
          <Title>{t('games.create')}</Title>
          <Label color={GRAY_100}>{t('game.fields.title')}</Label>
          <Input
            error={formik.touched.title && !!formik.errors.title}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorText color={RED_500}>
            {formik.touched.title && !!formik.errors.title
              ? t(formik.errors.title as string)
              : ''
            }
          </ErrorText>
          <Label color={GRAY_100}>{t('games.fields.url')}</Label>
          <Input
            error={formik.touched.slug && !!formik.errors.slug}
            name="slug"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="https://"
          />
          <ErrorText color={RED_500}>
            {formik.touched.slug && !!formik.errors.slug
              ? t(formik.errors.slug as string)
              : ''
            }
          </ErrorText>
          <CreateButton type="submit">
            {t('continue')}
          </CreateButton>
        </form>
      </Wrapper>
    </Modal>
  );
};

export default React.memo(GameCreate);

const Wrapper = styled.div`
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

const ErrorText = styled(Micro10)`
  display: block;
  height: 18px;
  padding-top: 4px;
  margin-bottom: 6px;
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
