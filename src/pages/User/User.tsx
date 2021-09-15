import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserList from '../../components/UserList/UserList';
import { role, user } from '../../types/user';

const User = () => {
  const userList: user[] = [
    {
      id: 1,
      loginId: 'u1',
      password: 'p1',
      name: 'user1 staff',
      role: role.STTAF,
      token: 'token01',
    },
    {
      id: 2,
      loginId: 'u2',
      password: 'p2',
      name: 'user2 staff',
      role: role.ADMIN,
      token: 'token02',
    },
  ];
  return (
    <Layout>
      <h2>User List Page</h2>
      <UserList userList={userList} />
    </Layout>
  );
};

export default User;
