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

const TodoSummary = React.memo(({ todoList }: Props) => {
  console.log('todo summary component');
  const dispatch = useAppDispatch();

  const toggleStatusDisabled = todoList.length === 0;
  const toggleStatusChecked = todoList.every((todo) => todo.isCompleted) && todoList.length > 0;
  const completedTodoCount = todoList.filter((todo) => todo.isCompleted).length;
  const allTodoCount = todoList.length;
  const deleteAllBtnDisabled = todoList.every((todo) => !todo.isCompleted);

  const handleChangeCheckbox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.currentTarget.checked;
    const updateTodoList = todoList
      .filter((todo) => todo.isCompleted !== isCompleted)
      .map((todo) => ({ ...todo, isCompleted }));
    await dispatch(updateAllTodoAsync({ todoList: updateTodoList }));
    await dispatch(fetchTodoListAsync());
  };

  const handleClickDeleteAll = async () => {
    const completedTodoList = todoList.filter((todo) => todo.isCompleted);
    await dispatch(deleteAllTodoAsync({ todoList: completedTodoList }));
    await dispatch(fetchTodoListAsync());
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggleStatus"
          onChange={handleChangeCheckbox}
          disabled={toggleStatusDisabled}
          checked={toggleStatusChecked}
        />
        <label htmlFor="toggleStatus">Toggle Completed Status To All Todo</label>
      </div>
      <span>Completed Todo Count: {completedTodoCount}</span>
      <span>, All Todo Count: {allTodoCount}</span>
      <button type="button" onClick={handleClickDeleteAll} disabled={deleteAllBtnDisabled}>
        Delete All Completed Todo
      </button>
    </>
  );
});

export default TodoSummary;
