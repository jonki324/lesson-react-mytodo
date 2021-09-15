import React from 'react';
import { user } from '../../types/user';

type Props = {
  user: user;
};

const UserDetail = ({ user }: Props) => {
  return (
    <>
      <div>ID: {user.id}</div>
      <div>Login ID: {user.loginId}</div>
      <div>Password: {user.password}</div>
      <div>Name: {user.name}</div>
      <div>Role: {user.role}</div>
    </>
  );
};

export default UserDetail;
