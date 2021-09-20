import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { destoryToken } from '../../features/core/jwtService';
import { setIsAuthenticated, setLoginUser } from '../../features/user/userSlice';
import { UserModel } from '../../types/user';

const Logout = () => {
  console.log('logout component');
  const dispatch = useAppDispatch();
  destoryToken();
  dispatch(setIsAuthenticated(false));
  dispatch(setLoginUser({} as UserModel));
  return <Redirect to="/login" />;
};

export default Logout;
