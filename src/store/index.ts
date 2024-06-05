import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { authApi } from './requests/auth.ts';
import allUsers from './users/index.ts';

const reducer = combineReducers({ allUsers });

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
