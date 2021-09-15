import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Counter } from './pages/Counter/Counter';
import Profile from './pages/Profile/Profile';
import Todo from './pages/Todo/Todo';
import User from './pages/User/User';
import UserDetailPage from './pages/UserDetail/UserDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/todos">
          <Todo />
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/users">
          <User />
        </Route>
        <Route exact path="/users/:id">
          <UserDetailPage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
