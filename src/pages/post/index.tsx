import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const PostPage = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <h1>Post</h1>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(PostPage, areEqual);
