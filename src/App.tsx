import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Counter } from './pages/Counter/Counter';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TodoPage from './pages/TodoPage/TodoPage';
import UserListPage from './pages/UserListPage/UserListPage';
import UserDetailPage from './pages/UserDetailPage/UserDetailPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthenticatedGuard from './components/AuthenticatedGuard/AuthenticatedGuard';
import Logout from './components/Logout/Logout';

const App = () => {
  console.log('app component');
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Switch>
          <AuthenticatedGuard>
            <Route exact path="/todos">
              <TodoPage />
            </Route>

            <Route exact path="/counter">
              <Counter />
            </Route>

            <Route exact path="/users">
              <UserListPage />
            </Route>

            <Route path="/users/:id">
              <UserDetailPage />
            </Route>

            <Route exact path="/profile">
              <ProfilePage />
            </Route>

            <Route exact path="/logout">
              <Logout />
            </Route>
          </AuthenticatedGuard>
        </Switch>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
