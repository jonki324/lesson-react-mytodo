import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { isAuthenticatedAsync } from '../../features/user/userSlice';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

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
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button type="button" onClick={handleClickLogin}>
        LOGIN
      </button>
    </>
  );
};

export default LoginForm;
