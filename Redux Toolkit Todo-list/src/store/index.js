import { configureStore } from '@reduxjs/toolkit';

import todosReducerSlice from './todosRedux';

const store = configureStore({
  reducer: { todos: todosReducerSlice },
});

export default store;
