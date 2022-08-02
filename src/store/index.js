// importing redux.
// import redux from 'redux';
// or we can import or pull out specific things from the redux library with this import syntax.
// import { createStore } from 'redux';
// instead of createStore, we will use 'configureStore'.
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// creating store.
// const store = redux.createStore(counterReducer);
// const store = createStore(counterReducer); // we can write like this also becoz imported specifically.

const store = configureStore({
    // merging different reducers to get one main reducer in the store.
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;


