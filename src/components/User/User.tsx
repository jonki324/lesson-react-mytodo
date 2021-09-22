import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserModel } from '../../types/user';
import { CardActionArea, Avatar, Link, CardHeader, Card, Grid } from '@material-ui/core';

type Props = {
  user: UserModel;
};

const User = ({ user }: Props) => {
  console.log(`user component user id ${user.id}`);
  return (
    <Grid item xs={12} md={4}>
      <Link component={RouterLink} to={`/users/${user.id}`} underline="none">
        <Card>
          <CardActionArea>
            <CardHeader
              avatar={<Avatar>{user.id}</Avatar>}
              title={user.name}
              subheader={user.loginId}
            />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default User;
