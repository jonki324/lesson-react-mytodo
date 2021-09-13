import React from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoSummary from '../../components/TodoSummary/TodoSummary';

const Todo = () => {
  return (
    <>
      <h2>Todo List Page</h2>
      <TodoFilter />
      <TodoList />
      <TodoForm />
      <TodoSummary />
    </>
  );
};

export default Todo;
