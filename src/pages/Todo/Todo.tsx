import React from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoSummary from '../../components/TodoSummary/TodoSummary';
import { todo, todoFilter } from '../../types/todo';

const Todo = () => {
  const todoFilter: todoFilter = {
    word: '',
    removeCompleted: false,
  };

  const todoList: todo[] = [
    {
      id: 1,
      body: 'todo1',
      isCompleted: false,
    },
    {
      id: 2,
      body: 'todo2',
      isCompleted: true,
    },
    {
      id: 3,
      body: 'todo3',
      isCompleted: false,
    },
  ];

  return (
    <>
      <h2>Todo List Page</h2>
      <TodoFilter filter={todoFilter} />
      <TodoList todoList={todoList} />
      <TodoForm />
      <TodoSummary todoList={todoList} />
    </>
  );
};

export default Todo;
