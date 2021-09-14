import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createTodoAsync } from '../../features/todo/todoSlice';

const TodoForm = () => {
  const dispatch = useAppDispatch();

  const [body, setBody] = useState('');

  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  const handleClickCreate = () => {
    const todo = {
      body,
      isCompleted: false,
    };
    dispatch(createTodoAsync(todo));
    setBody('');
  };

  return (
    <>
      <input type="text" value={body} onChange={handleChangeText} />
      <button type="button" onClick={handleClickCreate} disabled={body.trim() === ''}>
        Create New Todo
      </button>
    </>
  );
};

export default TodoForm;
