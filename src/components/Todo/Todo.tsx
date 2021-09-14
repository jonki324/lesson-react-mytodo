import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  deleteTodoAsync,
  fetchTodoListAsync,
  updateTodoAsync,
} from '../../features/todo/todoSlice';
import { todo } from '../../types/todo';

type Props = {
  todo: todo;
};

const Todo = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const checkboxId = `todo-${todo.id}`;

  const handleChangeCheckbox = () => {
    dispatch(updateTodoAsync({ ...todo, isCompleted: !todo.isCompleted }));
  };

  const handleClickDelete = () => {
    dispatch(deleteTodoAsync(todo));
    dispatch(fetchTodoListAsync());
  };

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
