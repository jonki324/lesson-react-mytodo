import React from 'react';
import { Link } from 'react-router-dom';
import { UserModel } from '../../types/user';

type Props = {
  user: UserModel;
};

const User = ({ user }: Props) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <span>ID: {user.id}</span>
        <span>, LoginID: {user.loginId}</span>
        <span>, Name: {user.name}</span>
      </Link>
    </li>
  );
};

export default User;
