import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { fetchLoginUserByStoreUserId, selectSelectedUser } from '../../features/user/userSlice';

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
      <h2>My Profile Page</h2>
      <UserDetail user={user} />
    </Layout>
  );
};

export default ProfilePage;
