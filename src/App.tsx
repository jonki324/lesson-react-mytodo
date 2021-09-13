import React from 'react';
import { Counter } from './pages/Counter/Counter';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
}

export default App;
