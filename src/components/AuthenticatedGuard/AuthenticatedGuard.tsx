import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { existToken, getLoginUserInfo } from '../../features/core/jwtService';
import { setIsAuthenticated, setLoginUser } from '../../features/user/userSlice';

type Props = {
  children: React.ReactNode;
};

const AuthenticatedGuard = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.pathname === '/logout' ? undefined : location?.pathname;

  const isAuthenticated = existToken();
  dispatch(setIsAuthenticated(isAuthenticated));
  if (isAuthenticated) {
    const user = getLoginUserInfo();
    dispatch(setLoginUser(user));
  }

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Redirect to={{ pathname: '/login', state: { from } }} />
  );
};

export default AuthenticatedGuard;
