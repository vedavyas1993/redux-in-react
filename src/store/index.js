// import redux from "redux";
// const redux = require("redux");
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
  // reducer: {counter: counterSlice.reducer, otherReducers}
});

export const counterActions = counterSlice.actions;
export default store;
