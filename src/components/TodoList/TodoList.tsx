import React from 'react';
import { todo } from '../../types/todo';
import Todo from '../Todo/Todo';

type Props = {
  todoList: todo[];
};

const TodoList = ({ todoList }: Props) => {
  return (
    <>
      <div>TodoList</div>
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
