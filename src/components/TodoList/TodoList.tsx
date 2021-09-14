import React from 'react';
import { todo, todoFilter } from '../../types/todo';
import Todo from '../Todo/Todo';

type Props = {
  todoList: todo[];
  filter: todoFilter;
};

const TodoList = ({ todoList, filter }: Props) => {
  return (
    <>
      <div>TodoList</div>
      <ul>
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
      </ul>
    </>
  );
};

export default TodoList;
