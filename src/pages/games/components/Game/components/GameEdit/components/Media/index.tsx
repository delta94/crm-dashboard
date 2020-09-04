import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, Image } from 'types/games';
import Cover from './components/Cover';
import { useFormik } from 'formik';
import { PurpleButton } from 'admin-library';
import { COVERS } from 'const';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { game } = props;
  const { media } = game.revision;
  const formik = useFormik({
    initialValues: {
      covers: media.covers as Record<string, Image | undefined>,
    },
    onSubmit: console.log,
  });

  const { t } = useTranslation();

  const handleChangeCover = (type: string, cover?: Image) => {
    formik.setFieldValue(`covers[${type}]`, cover);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {COVERS.map(key => (
        <Cover
          key={key}
          onChange={handleChangeCover}
          cover={formik.values.covers[key] as Image | undefined}
          type={key}
        />
      ))}
      <PurpleButton
        type="submit"
      >
        {t('save')}
      </PurpleButton>
    </form>
  );
};

export default React.memo(Media);
