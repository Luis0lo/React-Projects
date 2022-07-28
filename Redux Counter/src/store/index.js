import { configureStore } from '@reduxjs/toolkit';

import counterReducerSlice from './counterRedux';
import authReducerSlice from './authRedux';

const store = configureStore({
  reducer: { counter: counterReducerSlice, auth: authReducerSlice },
});

export default store;
