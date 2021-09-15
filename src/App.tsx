import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Counter } from './pages/Counter/Counter';
import Todo from './pages/Todo/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos">
          <Todo />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
