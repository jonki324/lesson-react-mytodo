import React from 'react';
import { UserModel } from '../../types/user';
import User from '../User/User';

type Props = {
  userList: UserModel[];
};

const UserList = ({ userList }: Props) => {
  console.log('user list component');
  return (
    <ul>
      {userList.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
