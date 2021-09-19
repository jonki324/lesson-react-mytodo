import React from 'react';
import Layout from '../../components/Layout/Layout';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  console.log('login page');
  return (
    <Layout>
      <h2>Login Page</h2>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
