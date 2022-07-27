import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //give us back a dispatch function which we can execute
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // the identifier type is coming from your redux store
    // afterward you need to add your function to the respective button
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  //react-redux automatically setup a subscription to the redux store for this component
  //component will be updated and receive the latest counter automatically whenever the data changes in the redux store
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
