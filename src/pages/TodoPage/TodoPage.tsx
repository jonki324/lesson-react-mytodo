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
import { Grid } from '@material-ui/core';

const TodoPage = () => {
  console.log('todo page');
  const dispatch = useAppDispatch();
  const todoFilter = useAppSelector(selectTodoFilter);
  const todoList = useAppSelector(selectTodoList);

  useEffect(() => {
    console.log('mounted');
    dispatch(fetchTodoListAsync());
  }, [dispatch]);

  return (
    <Layout>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <h2>Todo List Page</h2>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TodoFilter filter={todoFilter} />
          <TodoList todoList={todoList} filter={todoFilter} />
          <TodoForm />
          <TodoSummary todoList={todoList} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default TodoPage;
