import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import { themesReducer } from './themes.slice';
import { authReducer } from './auth.slice';
import { userReducer } from './user.slice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    themes: themesReducer,
    auth: authReducer,
    user: userReducer,
  }),
);
