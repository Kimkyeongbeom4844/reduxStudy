import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterReducer = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count += action.payload.count;
    },
  },
});
console.log(counterReducer);
export const { increment, decrement, incrementByAmount } =
  counterReducer.actions;
export default counterReducer.reducer;
