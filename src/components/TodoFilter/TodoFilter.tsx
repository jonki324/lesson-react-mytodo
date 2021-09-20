import React from 'react';
import { TodoFilterModel } from '../../types/todo';
import { useAppDispatch } from '../../app/hooks';
import { filterByTodo } from '../../features/todo/todoSlice';

type Props = {
  filter: TodoFilterModel;
};

const TodoFilter = React.memo(({ filter }: Props) => {
  console.log('todo fileter component');
  const dispatch = useAppDispatch();

  const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
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
});

export default TodoFilter;
