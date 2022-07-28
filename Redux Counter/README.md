# Redux

- Simple Counter with [Redux](https://redux.js.org/) library and [React Redux](https://react-redux.js.org/) which makes connecting react apps to redux stores and reducers simpler.
- [Redux Toolkit](https://redux-toolkit.js.org/) later implemented. Previous warning: @deprecated
  We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
- You can uninstall redux package after installing Redux Toolkit.

- Blog post [Redux Toolkit](https://blog.openreplay.com/redux-is-dead-long-live-redux-toolkit)

## View state of the code by commit

- [basic Redux implementation](https://github.com/Luis0lo/React-Projects/tree/605ca230e246561f0e583dd6e0ee4edd3ef9d108/Redux%20Counter)
- [upgrade to Redux toolkit](https://github.com/Luis0lo/React-Projects/tree/a23a0df7ed29ea6ece8adef982f339a59f2dc724/Redux%20Counter)
- [having multiple state slices](https://github.com/Luis0lo/React-Projects/tree/495cb7760e51f791b830b4b6a29ab836e7c6c850/Redux%20Counter)
- [splitting diff states slices into its own files](https://github.com/Luis0lo/React-Projects/tree/ca44bc0aa7ac40c46ac33f60a801c7f52a15e858/Redux%20Counter)

## Functional Component using plain redux

- Having Store folder in src folder is a common convention to store the redux related files

        import { createStore } from 'redux';
        const initialState = { counter: 0, showCounter: true };

        const counterReducer = (state = initialState, action) => {
                if (action.type === 'increment') {
                        return {
                                counter: state.counter + 1,
                                showCounter: state.showCounter,
                         };
                }

- Provide redux store to the react app. In src/index.js

        import {Provider} from 'react-redux'
        import store from './store/index'

        <Provider store={store}> <App /> </Provider>

- Select from store components/counter.js (functional components only)

        import {useSelector} from 'react-redux'
        const counter = useSelector((state) => state.counter);

- Dispatch an action against our Redux store

        import {useDispatch} from 'react-redux'
        const dispatch = useDispatch()

        const decrementHandler = () => {
                dispatch({ type: 'decrement' });
        };
        <button onClick={decrementHandler}>Decrement</button>

        const increaseHandler =()=>{
                dispatch({ type: 'increase', amount: 5});
        }
        <button onClick={increaseHandler}>Increase by 5</button>

## Class Component

- Check components/CounterClass.js

## Functional Component with Redux Toolkit

- Store/index.js responsible for initializing the store and merging different states slices

        import { configureStore } from '@reduxjs/toolkit';

        import counterReducerSlice from './counterRedux';
        import authReducerSlice from './authRedux';

        const store = configureStore({
                reducer: { counter: counterReducerSlice, auth: authReducerSlice },
        });

        export default store;

- Store/counterRedux.js holds counter slice

        import { createSlice } from '@reduxjs/toolkit';

        const initialCounterState = { counter: 0, showCounter: true };

        const counterSlice = createSlice({
          name: 'counter',
          initialState: initialCounterState,
          reducers: {
            increment(state) {
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

        export const counterActions = counterSlice.actions;
        export default counterSlice.reducer;

- component/counter.js

        import { useSelector, useDispatch } from 'react-redux';
        import { counterActions } from '../store/counterRedux';

        const Counter = () => {
          const dispatch = useDispatch();
          const counter = useSelector((state) => state.counter.counter);
          const show = useSelector((state) => state.counter.showCounter);

          const incrementHandler = () => {
            dispatch(counterActions.increment());
          };
          const decrementHandler = () => {
            dispatch(counterActions.decrement());
          };
          const increaseHandler = () => {
            dispatch(counterActions.increase(5));
          };
