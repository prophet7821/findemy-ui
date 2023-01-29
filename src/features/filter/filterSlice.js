import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beginner: false,
  intermediate: false,
  advanced: false,
  alllevels: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
    clearState: (state) => {
      state.beginner = false;
      state.intermediate = false;
      state.advanced = false;
      state.alllevels = false;
    },
  },
});

export const { changeState, clearState } = filterSlice.actions;
export default filterSlice.reducer;
