// importing redux.
// import redux from 'redux';
// or we can import or pull out specific things from the redux library with this import syntax.
import { createStore } from 'redux';

// creating reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
};

// creating store.
// const store = redux.createStore(counterReducer);
const store = createStore(counterReducer); // we can write like this also becoz imported specifically.

export default store;


