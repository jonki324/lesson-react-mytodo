import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoSummary from '../../components/TodoSummary/TodoSummary';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTodoFilter,
  fetchTodoListAsync,
  selectTodoList,
} from '../../features/todo/todoSlice';

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const todoFilter = useAppSelector(selectTodoFilter);
  const todoList = useAppSelector(selectTodoList);

  useEffect(() => {
    dispatch(fetchTodoListAsync());
  }, [dispatch]);

  return (
    <Layout>
      <h2>Todo List Page</h2>
      <TodoFilter filter={todoFilter} />
      <TodoList todoList={todoList} filter={todoFilter} />
      <TodoForm />
      <TodoSummary todoList={todoList} />
    </Layout>
  );
};

export default TodoPage;
