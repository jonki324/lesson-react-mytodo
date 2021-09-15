import React from 'react';
import { TodoModel, TodoFilterModel } from '../../types/todo';
import Todo from '../Todo/Todo';

type Props = {
  todoList: TodoModel[];
  filter: TodoFilterModel;
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
