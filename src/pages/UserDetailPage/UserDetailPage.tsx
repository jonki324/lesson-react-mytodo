import React, { useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { fetchUserByIdAsync, selectSelectedUser } from '../../features/user/userSlice';
import { Grid, Link } from '@material-ui/core';

const UserDetailPage = () => {
  console.log('user detail page');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log('mounted');
    dispatch(fetchUserByIdAsync(Number.parseInt(id)));
  }, [dispatch, id]);

  const user = useAppSelector(selectSelectedUser);

  return (
    <Layout>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <h2>User Detail Page</h2>
        </Grid>
        <Grid item xs={12} lg={6}>
          <UserDetail user={user} />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Link component={RouterLink} to="/users">
            Back
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserDetailPage;
