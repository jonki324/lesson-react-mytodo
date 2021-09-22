import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { fetchLoginUserByStoreUserId, selectSelectedUser } from '../../features/user/userSlice';
import { Grid } from '@material-ui/core';

const ProfilePage = () => {
  console.log('profile page');
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('mounted');
    dispatch(fetchLoginUserByStoreUserId());
  }, [dispatch]);

  const user = useAppSelector(selectSelectedUser);

  return (
    <Layout>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <h2>My Profile Page</h2>
        </Grid>
        <Grid item xs={12} lg={6}>
          <UserDetail user={user} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProfilePage;
