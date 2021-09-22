import React from 'react';
import { UserModel } from '../../types/user';
import { Card, CardContent, SvgIcon, Grid, Typography } from '@material-ui/core';
import Person from '@material-ui/icons/Person';

type Props = {
  user: Partial<UserModel>;
};

const UserDetail = ({ user }: Props) => {
  console.log('user detail component');
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={3}>
            <SvgIcon component={Person} sx={{ width: '100%', height: '100%' }} />
          </Grid>
          <Grid item xs={9}>
            <Typography paragraph>ID: {user.id}</Typography>
            <Typography paragraph>Login ID: {user.loginId}</Typography>
            <Typography paragraph>Password: {user.password}</Typography>
            <Typography paragraph>Name: {user.name}</Typography>
            <Typography paragraph>Role: {user.role}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserDetail;
