import React from 'react';
import { todoFilter } from '../../types/todo';
import { useAppDispatch } from '../../app/hooks';
import { filterByTodo } from '../../features/todo/todoSlice';

type Props = {
  filter: todoFilter;
};

const TodoFilter = ({ filter }: Props) => {
  const dispatch = useAppDispatch();

  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    const payload: todoFilter = {
      word: e.currentTarget.value,
      removeCompleted: filter.removeCompleted,
    };
    dispatch(filterByTodo(payload));
  };

  const handleChangeCheckbox = () => {
    const payload: todoFilter = {
      word: filter.word,
      removeCompleted: !filter.removeCompleted,
    };
    dispatch(filterByTodo(payload));
  };

  return (
    <>
      <div>TodoFilter</div>
      <div>
        <input type="text" value={filter.word} onChange={handleChangeText} />
        <input
          type="checkbox"
          id="removeCompleted"
          checked={filter.removeCompleted}
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="removeCompleted">Remove Completed</label>
      </div>
    </>
  );
};

export default TodoFilter;
