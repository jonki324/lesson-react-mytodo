import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  deleteAllTodoAsync,
  fetchTodoListAsync,
  updateAllTodoAsync,
} from '../../features/todo/todoSlice';
import { TodoModel } from '../../types/todo';

type Props = {
  todoList: TodoModel[];
};

const TodoSummary = ({ todoList }: Props) => {
  const dispatch = useAppDispatch();

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.currentTarget.checked;
    const updateTodoList = todoList
      .filter((todo) => todo.isCompleted !== isCompleted)
      .map((todo) => ({ ...todo, isCompleted }));
    dispatch(updateAllTodoAsync({ todoList: updateTodoList }));
    dispatch(fetchTodoListAsync());
  };

  const handleClickDeleteAll = () => {
    const completedTodoList = todoList.filter((todo) => todo.isCompleted);
    dispatch(deleteAllTodoAsync({ todoList: completedTodoList }));
    dispatch(fetchTodoListAsync());
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggleStatus"
          onChange={handleChangeCheckbox}
          disabled={todoList.length === 0}
          checked={todoList.every((todo) => todo.isCompleted) && todoList.length > 0}
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
