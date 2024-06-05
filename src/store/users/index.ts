import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  name: string;
  room: string;
}

const { actions: userActions, reducer: usersReducer } = createSlice({
  initialState: [] as UserState[],
  name: 'allUsers',
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.push(action.payload);
    },
  },
});

export default usersReducer;
export const { addUser } = userActions;
