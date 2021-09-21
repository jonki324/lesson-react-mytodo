import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isAuthenticatedAsync, selectIsAuthenticated } from '../../features/user/userSlice';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LoginForm = () => {
  console.log('login form component');
  const dispatch = useAppDispatch();

  const location = useLocation<{ from: string | undefined }>().state ?? undefined;

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const disabled = loginId.trim() === '' || password.trim() === '';

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Redirect to={location?.from ?? '/todos'} />;
  }

  const handleClickLogin = () => {
    dispatch(isAuthenticatedAsync({ loginId, password }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="loginId"
          label="Login ID"
          variant="outlined"
          fullWidth
          value={loginId}
          onChange={(e) => setLoginId(e.currentTarget.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleClickLogin} disabled={disabled} fullWidth>
          LOGIN
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
