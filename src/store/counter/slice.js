import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // actions
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    ...middlewareActions,
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
  performCounterReset,
} = counterSlice.actions;

export default counterSlice.reducer; // reducer
