import React from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoSummary from '../../components/TodoSummary/TodoSummary';
import { todo } from '../../types/todo';
import { useAppSelector } from '../../app/hooks';
import { selectTodoFilter } from '../../features/todo/todoSlice';

const Todo = () => {
  const todoFilter = useAppSelector(selectTodoFilter);

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
      <TodoList todoList={todoList} filter={todoFilter} />
      <TodoForm />
      <TodoSummary todoList={todoList} />
    </>
  );
};

export default Todo;
