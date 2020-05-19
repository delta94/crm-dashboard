import React, { useState, useEffect } from 'react';
import { Loading } from 'react-admin';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userLogin } from 'ra-core';
import getClient from 'apolloClient';
import { getUserId, getUser, env, setCookie } from 'helpers';

const fetchUrl = `${env('AUTH_URL')}/jwt`;

interface Props {
  userLogin: any;
}

const AuthSuccess = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const onAuthSuccess = async () => {
    try {
      const jwtData = await fetch(fetchUrl, {
        credentials: 'include',
      });
      const json = await jwtData.json();
      const { jwt = '' } = json;

      const client = getClient(jwt);
      const userId = getUserId(jwt);

      if (!userId) throw new Error('Unknown user');

      const user = await getUser(client, +userId);

      setCookie('TOKEN', jwt);

      setLoading(false);
      props.userLogin({ client, user });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    onAuthSuccess();
    // eslint-disable-next-line
  }, []);

  return loading
    ? <Loading />
    : <Redirect to="/" />;
};

const mapStateToProps = (state: any) => ({ client: state.client });

export default connect(
  mapStateToProps,
  { userLogin }
)(AuthSuccess);
