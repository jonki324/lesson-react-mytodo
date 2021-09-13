import React, { useState } from 'react';

const TodoForm = () => {
  const [body, setBody] = useState('');

  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  const handleClickCreate = () => {};

  return (
    <>
      <input type="text" value={body} onChange={handleChangeText} />
      <button type="button" onClick={handleClickCreate} disabled={body === ''}>
        Create New Todo
      </button>
    </>
  );
};

export default TodoForm;
