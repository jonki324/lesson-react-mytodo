import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { role, user } from '../../types/user';

const Profile = () => {
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
      <h2>My Profile Page</h2>
      <UserDetail user={user} />
    </Layout>
  );
};

export default Profile;
