import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TodoModel, TodoFilterModel } from '../../types/todo';
import {
  fetchTodoList,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteAllTodo,
  updateAllTodo,
} from './todoAPI';

export interface TodoState {
  todoList: TodoModel[];
  filter: TodoFilterModel;
}

const initialState: TodoState = {
  todoList: [],
  filter: { word: '', removeCompleted: false },
};

export const fetchTodoListAsync = createAsyncThunk('todo/fetchTodoList', async () => {
  const response = await fetchTodoList();
  return response.data;
});

export const createTodoAsync = createAsyncThunk(
  'todo/createTodo',
  async (todo: Partial<TodoModel>) => {
    const response = await createTodo(todo);
    return response.data;
  }
);

export const deleteTodoAsync = createAsyncThunk('todo/deleteTodo', async (todo: TodoModel) => {
  const response = await deleteTodo(todo);
  return response.data;
});

export const updateTodoAsync = createAsyncThunk('todo/updateTodo', async (todo: TodoModel) => {
  const response = await updateTodo(todo);
  return response.data;
});

export const deleteAllTodoAsync = createAsyncThunk(
  'todo/deleteAllTodo',
  async (todoList: { todoList: TodoModel[] }) => {
    const response = await deleteAllTodo(todoList);
    return response.data;
  }
);

export const updateAllTodoAsync = createAsyncThunk(
  'todo/updateAllTodo',
  async (todoList: { todoList: TodoModel[] }) => {
    const response = await updateAllTodo(todoList);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    filterByTodo: (state, action: PayloadAction<TodoFilterModel>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoListAsync.pending, (state) => {
        console.log('loading...');
      })
      .addCase(fetchTodoListAsync.fulfilled, (state, action) => {
        const current = JSON.stringify(state.todoList);
        const payload = JSON.stringify(action.payload);
        if (current !== payload) {
          state.todoList = action.payload;
        }
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
