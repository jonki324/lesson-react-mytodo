import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createTodoAsync } from '../../features/todo/todoSlice';
import { Box, TextField, Button } from '@material-ui/core';

const TodoForm = React.memo(() => {
  console.log('todo form component');
  const dispatch = useAppDispatch();

  const [body, setBody] = useState('');

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        type="text"
        label="New Todo"
        variant="outlined"
        value={body}
        onChange={handleChangeText}
        sx={{ mr: 2, flexGrow: 1 }}
      />
      <Button
        type="button"
        variant="contained"
        onClick={handleClickCreate}
        disabled={body.trim() === ''}
      >
        Create New Todo
      </Button>
    </Box>
  );
});

export default TodoForm;
