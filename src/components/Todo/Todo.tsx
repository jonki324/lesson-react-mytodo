import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  deleteTodoAsync,
  fetchTodoListAsync,
  updateTodoAsync,
} from '../../features/todo/todoSlice';
import { TodoModel } from '../../types/todo';
import { Button, FormGroup, FormControlLabel, Checkbox, Box, Chip } from '@material-ui/core';

type Props = {
  todo: TodoModel;
};

const Todo = ({ todo }: Props) => {
  console.log(`todo component ${todo.id}`);
  const dispatch = useAppDispatch();

  const handleChangeCheckbox = () => {
    dispatch(updateTodoAsync({ ...todo, isCompleted: !todo.isCompleted }));
  };

  const handleClickDelete = async () => {
    await dispatch(deleteTodoAsync(todo));
    await dispatch(fetchTodoListAsync());
  };

  const labelValue = () => {
    return todo.isCompleted ? (
      <>
        {todo.body}
        <Chip label="Completed !" sx={{ ml: 1 }} color="success" />
      </>
    ) : (
      <>{todo.body}</>
    );
  };

  return (
    <>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <FormGroup sx={{ flexGrow: 1 }}>
          <FormControlLabel
            control={<Checkbox checked={todo.isCompleted} onChange={handleChangeCheckbox} />}
            label={labelValue()}
          />
        </FormGroup>
        <Button type="button" variant="outlined" color="error" onClick={handleClickDelete}>
          Delete
        </Button>
      </Box>
    </>
  );
};

export default Todo;
