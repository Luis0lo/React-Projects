import { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

//hooks are not use in class base components
//we need to import 'connect' for this mater

class Counter extends Component {
  //methods in javascrip classes
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          {/* //bind to make sure it refers to the class */}
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
//receives the redux state
const mapStateToProps = (state) => {
  return {
    //keys are props in the recieving compoent, counter
    counter: state.counter,
  };
};

//store dispatch functions in props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

//return a function as a value and executes again
//we pass or component to that return function as our argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
