import React from 'react';
import { UserModel } from '../../types/user';
import User from '../User/User';

type Props = {
  userList: UserModel[];
};

const UserList = ({ userList }: Props) => {
  return (
    <ul>
      {userList.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
