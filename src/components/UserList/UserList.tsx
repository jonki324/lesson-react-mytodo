import React from 'react';
import { UserModel } from '../../types/user';
import User from '../User/User';
import { Grid } from '@material-ui/core';

type Props = {
  userList: UserModel[];
};

const UserList = ({ userList }: Props) => {
  console.log('user list component');
  return (
    <Grid container spacing={2}>
      {userList.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default UserList;
