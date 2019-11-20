import React, { useState, useEffect } from 'react';
import { Loading } from 'react-admin';
import { Redirect } from 'react-router';
import { env, setCookie } from 'helpers';
import { connect } from 'react-redux';
import { userLogin } from 'ra-core';
import getClient from 'apolloClient';
import { getUserId } from 'helpers';

import { USER_QUERY } from './query';

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

      const userData = await client.query({
        query: USER_QUERY,
        variables: { id: +userId },
      }).catch(err => console.log(err));

      const user = userData && userData.data && userData.data.users && userData.data.users[0];
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
