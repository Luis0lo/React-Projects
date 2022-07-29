import { createSlice } from '@reduxjs/toolkit';

const initialTodosState = { list: [] };

const listSlice = createSlice({
  name: 'todos',
  initialState: initialTodosState,
  reducers: {
    add(state, action) {
      state.list = [...state.list, action.payload];
    },
    remove(state, action) {
      let index = state.list.findIndex((todo) => todo === action.payload);
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;
