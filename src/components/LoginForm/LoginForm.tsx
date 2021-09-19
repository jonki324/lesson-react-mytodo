import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isAuthenticatedAsync, selectIsAuthenticated } from '../../features/user/userSlice';

const LoginForm = () => {
  console.log('login form component');
  const dispatch = useAppDispatch();

  const location = useLocation<{ from: string | undefined }>().state ?? undefined;

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Redirect to={location?.from ?? '/todos'} />;
  }

  const handleClickLogin = () => {
    dispatch(isAuthenticatedAsync({ loginId, password }));
  };

  return (
    <>
      <div>
        <label htmlFor="loginId">LoginID: </label>
        <input
          type="text"
          id="loginId"
          value={loginId}
          onChange={(e) => setLoginId(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleClickLogin}
        disabled={loginId.trim() === '' || password.trim() === ''}
      >
        LOGIN
      </button>
    </>
  );
};

export default LoginForm;
