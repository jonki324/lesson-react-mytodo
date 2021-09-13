import React from 'react';
import { todo } from '../../types/todo';

type Props = {
  todo: todo;
};

const Todo = ({ todo }: Props) => {
  const checkboxId = `todo-${todo.id}`;

  const handleChangeCheckbox = () => {};

  const handleClickDelete = () => {};

  return (
    <>
      <li>
        <input
          type="checkbox"
          id={checkboxId}
          checked={todo.isCompleted}
          onChange={handleChangeCheckbox}
        />
        <label htmlFor={checkboxId}>{todo.body}</label>
        <button type="button" onClick={handleClickDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Todo;
