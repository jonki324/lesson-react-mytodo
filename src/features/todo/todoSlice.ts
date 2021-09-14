import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { todo, todoFilter } from '../../types/todo';
import {
  fetchTodoList,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteAllTodo,
  updateAllTodo,
} from './todoAPI';

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

export const createTodoAsync = createAsyncThunk('todo/createTodo', async (todo: Partial<todo>) => {
  const response = await createTodo(todo);
  return response.data;
});

export const deleteTodoAsync = createAsyncThunk('todo/deleteTodo', async (todo: todo) => {
  const response = await deleteTodo(todo);
  return response.data;
});

export const updateTodoAsync = createAsyncThunk('todo/updateTodo', async (todo: todo) => {
  const response = await updateTodo(todo);
  return response.data;
});

export const deleteAllTodoAsync = createAsyncThunk(
  'todo/deleteAllTodo',
  async (todoList: { todoList: todo[] }) => {
    const response = await deleteAllTodo(todoList);
    return response.data;
  }
);

export const updateAllTodoAsync = createAsyncThunk(
  'todo/updateAllTodo',
  async (todoList: { todoList: todo[] }) => {
    const response = await updateAllTodo(todoList);
    return response.data;
  }
);

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
      })
      .addCase(createTodoAsync.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        state.todoList = state.todoList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      });
  },
});

export const { filterByTodo } = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;
export const selectTodoFilter = (state: RootState) => state.todo.filter;

export default todoSlice.reducer;
