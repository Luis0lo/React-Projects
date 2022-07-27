# Redux

- Simple Counter with [Redux](https://redux.js.org/) Library and [React Reedux](https://react-redux.js.org/) which makes connecting react apps to redux stores and reducers simpler
- Redux [Toolkit](https://redux-toolkit.js.org/) later implemented. Previous warning: @deprecated
  We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
- You can uninstall redux package after installing Redux Toolkit

## Functional Component

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

## Run

git clone > npm i
