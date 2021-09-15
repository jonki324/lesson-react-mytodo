import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { role, user } from '../../types/user';

const UserDetailPage = () => {
  const user: user = {
    id: 1,
    loginId: 'u1',
    password: 'p1',
    name: 'user1 staff',
    role: role.STTAF,
    token: 'token01',
  };

  return (
    <Layout>
      <h2>User Detail Page</h2>
      <UserDetail user={user} />
      <Link to="/users">Back</Link>
    </Layout>
  );
};

export default UserDetailPage;
