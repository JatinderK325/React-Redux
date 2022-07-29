// useSelector allows us to get(select) the part of our state managed by the store. useDispatch hook is to dispatch an action.
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // useDispatch() gives us a function 'dispatch' that we can execute to dispatch an action.
  const dispatch = useDispatch();
  // useSelector is a custom hook(react hook) made by react-redux team.
  // here, useSelector takes a function. This function is executed by react-redux and determines which piece of data we want to extract from store.
  // state = redux state(managed data) 
  // state.counter is retriving the part of the state that we want in this component.
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    // dispatch here is a function which can be called, which will dispatch an action against our redux store.
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

 export default Counter; 

/*
CLASS-BASED COMPONENT: ------------
// Refer notebook 2 section-18 topic: class-based components for explanation of every keyword used.
import { Component } from 'react';
// connect is an alternative to 'useSelector' and 'useDispatch'. becoz we can't use hooks in class-based components.
import { connect } from 'react-redux';
import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div className={classes.button}>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

// mapStateToProps is a function that maps redux state to props which will be received in this component.
// this function receives the redux state and then returns an object where the keys of the object will be available as the props in the receiving component and the values of these keys is a logic for drilling into that redux state. 
const mapStateToProps = state => {
  return {
    counter: state.counter, // picked 'counter' value from a redux state and binded it to the prop 'counter'.
  };
};

// mapDispatchToProps is a function equivalent to 'useDispatch'. Here, the idea is to store dispatch function in props.
// It receives dispatch as an argument.
const mapDispatchToProps = dispatch => {
  return {
    // returns an object where keys are props name which we can use in this component and value is a function where we call dispatch and setup our action.
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
