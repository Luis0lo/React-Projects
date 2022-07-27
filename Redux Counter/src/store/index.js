import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };
//preparing a slice of our global state
const counterSlice = createSlice({
  //slice identifier
  name: 'counter',
  //initiate the state
  initialState: initialState,
  //reducers 'methods' the slice need
  reducers: {
    increment(state) {
      //we are allow to mutate the state!!
      //toolkit automatically clones the current state and create a new state object
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//you get access to the reducers set on slice
const store = configureStore({
  reducer: counterSlice.reducer, //with only one reducer
  // reducer: { counter: counterSlice.reducer },// if you have more slice just add in the object
});

export const counterActions = counterSlice.actions;
export default store;
