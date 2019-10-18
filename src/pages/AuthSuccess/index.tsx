import React, { useState, useEffect } from 'react';
import { Loading } from 'react-admin';
import { Redirect } from 'react-router';
import { env, getCookie, setCookie } from 'helpers';

const fetchUrl = `${env('AUTH_URL')}/jwt`;

const AuthSuccess = () => {
  const [loading, setLoading] = useState(true);
  const getJWTToken = async () => {
    const isUserLoggedIn = !!getCookie('TOKEN');
    if (isUserLoggedIn) {
      setLoading(false);
      return;
    }

    try {
      const data = await fetch(fetchUrl, {
        credentials: 'include',
      });
      const json = await data.json();
      const { jwt } = json;
      setCookie('TOKEN', jwt);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJWTToken();
  }, []);

  return loading
    ? <Loading />
    : <Redirect to="/" />;
};

export default AuthSuccess;
