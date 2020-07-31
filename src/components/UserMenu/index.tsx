import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { UserMenu as Menu } from 'admin-library';
import { Button } from '@material-ui/core';
import { login, logout } from 'auth';
import { getUserRequest } from 'api/profile';

const UserMenu = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>('User');
  const [loading, setLoading] = useState(true);
  const loginButton = (
    <Button onClick={login} color="primary">{t('login')}</Button>
  );

  console.log(user);

  const getUser = async () => {
    const { json, error } = await getUserRequest();

    setLoading(false);

    if (error) return;

    setUser(json);
  };

  const menuItems = [
    {
      title: t('logout'),
      onClick: logout,
    },
    {
      title: t('login'),
      onClick: login,
    },
  ];

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Menu
      loginButton={loginButton}
      menuItems={menuItems}
      user={user}
      loading={loading}
    />
  );
};

export default React.memo(UserMenu);
