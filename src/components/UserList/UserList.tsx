import React from 'react';
import { user } from '../../types/user';
import User from '../User/User';

type Props = {
  userList: user[];
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
