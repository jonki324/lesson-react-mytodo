import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from '../../components/Layout/Layout';
import UserDetail from '../../components/UserDetail/UserDetail';
import { fetchUserByIdAsync, selectSelectedUser } from '../../features/user/userSlice';

const UserDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchUserByIdAsync(Number.parseInt(id)));
  }, [dispatch, id]);

  const user = useAppSelector(selectSelectedUser);

  return (
    <Layout>
      <h2>User Detail Page</h2>
      <UserDetail user={user} />
      <Link to="/users">Back</Link>
    </Layout>
  );
};

export default UserDetailPage;
