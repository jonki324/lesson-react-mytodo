import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserList from '../../components/UserList/UserList';
import { fetchUserListAsync, selectUserList } from '../../features/user/userSlice';
import { Grid } from '@material-ui/core';

const UserListPage = () => {
  console.log('user list page');
  const dispatch = useAppDispatch();

  const userList = useAppSelector(selectUserList);

  useEffect(() => {
    console.log('page mounted');
    dispatch(fetchUserListAsync());
  }, [dispatch]);

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} textAlign="center">
          <h2>User List Page</h2>
        </Grid>
        <Grid item xs={12}>
          <UserList userList={userList} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserListPage;
