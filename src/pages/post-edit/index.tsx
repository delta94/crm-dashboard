import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from 'components/Post';
import { Loader } from 'admin-library';
import { getPostByIdRequest } from 'api/posts';
import { Post as PostType } from 'types/posts';

const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostType>();
  const { id = '' } = useParams();

  const getPost = async () => {
    setLoading(true);

    const { error, json } = await getPostByIdRequest(id);

    setLoading(false);

    if (error) {
      alert(error.message);
    }

    setPost(json);
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  if (!post) return null;

  return <Post post={post} />;
};

export default React.memo(PostPage);
