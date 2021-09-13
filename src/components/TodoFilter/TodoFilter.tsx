import React from 'react';
import { todoFilter } from '../../types/todo';

type Props = {
  filter: todoFilter;
};

const TodoFilter = ({ filter }: Props) => {
  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {};

  const handleChangeCheckbox = () => {};

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
