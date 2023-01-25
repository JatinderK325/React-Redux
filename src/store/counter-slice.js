import { createSlice } from "@reduxjs/toolkit";
//
/* instead of reducer function, we have made one state slice here i.e createSlice().
// creating reducer function
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }
    return state;
}; */

// creating a slice of our global state. here both 'counter' and 'showCounter' state belong kind of together so we will create one slice. If we have different pieces of state which are not related, we can create different slices. createSlice wants an object.
const counterSlice = createSlice({
    name: 'counter', //every slice needs name
    initialState: { counter: 0, showCounter: true },
    reducers: {
        // every method here will automatically receive the latest(current) state. these methods will be called by redux. these methods will automatically be called depending upon which action was triggered.
        increment(state) {
            // just keep the code that we want to change. with redux tooklit, we are not forced to keep the code that we are not changing.
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // here we need extra payload(data) that is attached to the action. therefore we used 'action' as a parameter here, in other reducers(increment...), we had no need for action becoz there we do not need to do anything with the 'action'. here increase is a reducer that have an extra payload can listen to actions.
        increase(state, action) {
            // state.counter = state.counter + action.amount;
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;