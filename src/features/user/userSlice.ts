import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { user } from '../../types/user';
import { fetchUserById, fetchUserList, isAuthenticated } from './userAPI';

export interface UserState {
  userList: user[];
  selectedUser: Partial<user> | null;
  isAuthenticated: boolean;
  loginUser: Partial<user> | null;
}

const initialState: UserState = {
  userList: [],
  selectedUser: null,
  isAuthenticated: false,
  loginUser: null,
};

export const fetchUserByIdAsync = createAsyncThunk('user/fetchUserById', async (id: number) => {
  const response = await fetchUserById(id);
  return response.data;
});

export const fetchUserListAsync = createAsyncThunk('user/fetchUserList', async () => {
  const response = await fetchUserList();
  return response.data;
});

export const isAuthenticatedAsync = createAsyncThunk(
  'user/isAuthenticated',
  async (user: Partial<user>) => {
    const response = await isAuthenticated(user);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByIdAsync.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserListAsync.fulfilled, (state, action) => {
        state.userList = action.payload;
      })
      .addCase(isAuthenticatedAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loginUser = action.payload;
      });
  },
});

export const selectUserList = (state: RootState) => state.user.userList;
export const selectSelectedUser = (state: RootState) => state.user.selectedUser;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectLoginUser = (state: RootState) => state.user.loginUser;

export default userSlice.reducer;
