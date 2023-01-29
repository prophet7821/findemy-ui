import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    startLoading: (state, { payload }) => {
      state.loading = true;
    },
    stopLoading: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading } = alertSlice.actions;

export default alertSlice.reducer;
