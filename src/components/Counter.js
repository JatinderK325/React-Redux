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
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
