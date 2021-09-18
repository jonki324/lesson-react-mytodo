import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserList from '../../components/UserList/UserList';
import { fetchUserListAsync, selectUserList } from '../../features/user/userSlice';

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
      <h2>User List Page</h2>
      <UserList userList={userList} />
    </Layout>
  );
};

export default UserListPage;
