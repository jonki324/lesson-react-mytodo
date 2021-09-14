import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { todo, todoFilter } from '../../types/todo';
import { fetchTodoList } from './todoAPI';

export interface TodoState {
  todoList: todo[];
  filter: todoFilter;
}

const initialState: TodoState = {
  todoList: [],
  filter: { word: '', removeCompleted: false },
};

export const fetchTodoListAsync = createAsyncThunk('todo/fetchTodoList', async () => {
  const response = await fetchTodoList();
  return response.data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    filterByTodo: (state, action: PayloadAction<todoFilter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoListAsync.pending, (state) => {
        console.log('loading...');
      })
      .addCase(fetchTodoListAsync.fulfilled, (state, action) => {
        state.todoList = action.payload;
      });
  },
});

export const { filterByTodo } = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;
export const selectTodoFilter = (state: RootState) => state.todo.filter;

export default todoSlice.reducer;
