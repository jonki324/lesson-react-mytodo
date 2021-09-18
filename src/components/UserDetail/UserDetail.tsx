import React from 'react';
import { UserModel } from '../../types/user';

type Props = {
  user: Partial<UserModel>;
};

const UserDetail = ({ user }: Props) => {
  console.log('user detail component');
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
