import React from 'react';
import Layout from '../../components/Layout/Layout';
import LoginForm from '../../components/LoginForm/LoginForm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const LoginPage = () => {
  console.log('login page');
  return (
    <Layout>
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid item>
          <Card raised={true} sx={{ width: 350 }}>
            <CardHeader title="Login" sx={{ textAlign: 'center' }} />
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LoginPage;
