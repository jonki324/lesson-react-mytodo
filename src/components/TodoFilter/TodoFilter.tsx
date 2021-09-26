import React from 'react';
import { TodoFilterModel } from '../../types/todo';
import { useAppDispatch } from '../../app/hooks';
import { filterByTodo } from '../../features/todo/todoSlice';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  TextField,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

type Props = {
  filter: TodoFilterModel;
};

const TodoFilter = React.memo(({ filter }: Props) => {
  console.log('todo fileter component');
  const dispatch = useAppDispatch();

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload: TodoFilterModel = {
      word: e.currentTarget.value,
      removeCompleted: filter.removeCompleted,
    };
    dispatch(filterByTodo(payload));
  };

  const handleChangeCheckbox = () => {
    const payload: TodoFilterModel = {
      word: filter.word,
      removeCompleted: !filter.removeCompleted,
    };
    dispatch(filterByTodo(payload));
  };

  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>TodoFilter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            type="text"
            label="Filter Keyword"
            variant="outlined"
            value={filter.word}
            onChange={handleChangeText}
            sx={{ mr: 2, flexGrow: 1 }}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={filter.removeCompleted} onChange={handleChangeCheckbox} />
              }
              label="Remove Completed"
            />
          </FormGroup>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
});

export default TodoFilter;
