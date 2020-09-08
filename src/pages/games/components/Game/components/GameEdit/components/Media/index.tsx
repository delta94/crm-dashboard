import React from 'react';
import { useTranslation } from 'react-i18next';
import { Game, Image } from 'types/games';
import Cover from './components/Cover';
import { useFormik } from 'formik';
import { PurpleButton } from 'admin-library';
import { COVERS } from 'const';

import Screenshots from './components/Screenshots';
import YoutubeLinks from './components/YoutubeLinks';

interface Props {
  game: Game;
  onEdit: (data: any) => void;
}

const Media = (props: Props) => {
  const { game } = props;
  const { media } = game.revision;
  
  const formik = useFormik({
    initialValues: {
      covers: {} as Record<string, Image | undefined>, //media.covers as Record<string, Image | undefined>,
      screenshots: media?.screenshots || [],
      links: [],
    },
    onSubmit: console.log,
  });

  const { t } = useTranslation();

  const handleChangeCover = (type: string, cover?: Image) => {
    formik.setFieldValue(`covers[${type}]`, cover);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Screenshots 
        screenshots={formik.values.screenshots}
        onChange={formik.setFieldValue}
      />
      <YoutubeLinks 
        links={formik.values.links} 
        onChange={formik.setFieldValue}  
      />
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
