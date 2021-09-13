import React from 'react';
import { todo } from '../../types/todo';

type Props = {
  todoList: todo[];
};

const TodoSummary = ({ todoList }: Props) => {
  const handleChangeCheckbox = () => {};

  const handleClickDeleteAll = () => {};

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggleStatus"
          onChange={handleChangeCheckbox}
          disabled={todoList.length === 0}
          checked={todoList.every((todo) => todo.isCompleted)}
        />
        <label htmlFor="toggleStatus">Toggle Completed Status To All Todo</label>
      </div>
      <span>Completed Todo Count: {todoList.filter((todo) => todo.isCompleted).length}</span>
      <span>, All Todo Count: {todoList.length}</span>
      <button
        type="button"
        onClick={handleClickDeleteAll}
        disabled={todoList.every((todo) => !todo.isCompleted)}
      >
        Delete All Completed Todo
      </button>
    </>
  );
};

export default TodoSummary;
