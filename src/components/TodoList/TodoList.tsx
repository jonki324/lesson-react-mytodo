import React from 'react';
import { TodoModel, TodoFilterModel } from '../../types/todo';
import Todo from '../Todo/Todo';
import { Divider, Typography } from '@material-ui/core';

type Props = {
  todoList: TodoModel[];
  filter: TodoFilterModel;
};

const TodoList = ({ todoList, filter }: Props) => {
  console.log('todo list component');
  return (
    <>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="h5">TodoList</Typography>
      </Divider>
      {todoList
        .filter((todo) => {
          return filter.removeCompleted ? !todo.isCompleted : true;
        })
        .filter((todo) => {
          return filter.word !== '' ? todo.body.indexOf(filter.word) > -1 : true;
        })
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </>
  );
};

export default TodoList;
