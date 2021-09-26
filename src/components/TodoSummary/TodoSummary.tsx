import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  deleteAllTodoAsync,
  fetchTodoListAsync,
  updateAllTodoAsync,
} from '../../features/todo/todoSlice';
import { TodoModel } from '../../types/todo';
import {
  Button,
  Checkbox,
  Chip,
  Divider,
  FormGroup,
  FormControlLabel,
  Typography,
  Box,
} from '@material-ui/core';

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
      <FormGroup sx={{ mt: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={toggleStatusChecked}
              disabled={toggleStatusDisabled}
              onChange={handleChangeCheckbox}
            />
          }
          label="Toggle Completed Status To All Todo"
        />
      </FormGroup>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
          <Typography>Completed Todo Count : </Typography>
          <Chip label={completedTodoCount} color="success" sx={{ ml: 1 }} />
          <Typography sx={{ ml: 1 }}>All Todo Count : </Typography>
          <Chip label={allTodoCount} color="primary" sx={{ ml: 1 }} />
        </Box>
        <Button
          type="button"
          onClick={handleClickDeleteAll}
          disabled={deleteAllBtnDisabled}
          variant="contained"
          color="error"
        >
          Delete All Completed Todo
        </Button>
      </Box>
    </>
  );
});

export default TodoSummary;
