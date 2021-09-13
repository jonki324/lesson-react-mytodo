import React from 'react';
// import { Counter } from './pages/Counter/Counter';
import './App.css';
import Layout from './components/Layout/Layout';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <Layout>
      <Todo />
      {/* <Counter /> */}
    </Layout>
  );
}

export default App;
