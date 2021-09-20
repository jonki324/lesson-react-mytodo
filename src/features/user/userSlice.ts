import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { UserModel } from '../../types/user';
import { deepEqualSelector } from '../core/deepEqualSelector';
import { saveToken } from '../core/jwtService';
import { fetchUserById, fetchUserList, isAuthenticated } from './userAPI';

export interface UserState {
  userList: UserModel[];
  selectedUser: Partial<UserModel>;
  isAuthenticated: boolean;
  loginUser: Partial<UserModel>;
}

const initialState: UserState = {
  userList: [],
  selectedUser: {},
  isAuthenticated: false,
  loginUser: {},
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
  async (user: Partial<UserModel>) => {
    const response = await isAuthenticated(user);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setLoginUser: (state, action: PayloadAction<Partial<UserModel>>) => {
      state.loginUser = action.payload;
    },
  },
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
        saveToken(action.payload.token);
      });
  },
});

export const { setIsAuthenticated, setLoginUser } = userSlice.actions;

export const selectUserList = deepEqualSelector((state: RootState) => state.user.userList);
export const selectSelectedUser = deepEqualSelector((state: RootState) => state.user.selectedUser);
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectLoginUser = (state: RootState) => state.user.loginUser;

export const fetchLoginUserByStoreUserId = (): AppThunk => (dispatch, getState) => {
  const id = selectLoginUser(getState()).id || 0;
  dispatch(fetchUserByIdAsync(id));
};

export default userSlice.reducer;
