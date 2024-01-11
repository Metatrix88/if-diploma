import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      username: action.payload.username,
      birthdate: action.payload.birthdate,
      email: action.payload.email,
      password: action.payload.password,
      token: action.payload.token,
      id: action.payload.id,
    }),
    removeUser: (state) => ({
      ...state,
      username: null,
      birthdate: null,
      email: null,
      password: null,
      token: null,
      id: null,
    }),
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
