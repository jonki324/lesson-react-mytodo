import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { todo, todoFilter } from '../../types/todo';

export interface TodoState {
  todoList: todo[];
  filter: todoFilter;
}

const initialState: TodoState = {
  todoList: [],
  filter: { word: '', removeCompleted: false },
};

export const fetchTodoListAsync = createAsyncThunk('todo/fetchTodoList', async () => {});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    filterByTodo: (state, action: PayloadAction<todoFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const { filterByTodo } = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;
export const selectTodoFilter = (state: RootState) => state.todo.filter;

export default todoSlice.reducer;
