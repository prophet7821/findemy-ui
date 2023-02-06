import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "../alert/alertSlice";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  errorMessage: "",
  isError: false,
  isSuccess: false,
};

const url = "https://passport-findemy.onrender.com/users";

export const getCoursesInCart = createAsyncThunk(
  "cart/getCoursesInCart",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await axios.post(`${url}/getEnrolledCourses`, { id });
      dispatch(stopLoading());
      return res.data;
    } catch (err) {
      dispatch(stopLoading());
      if (err.message == "Network Error") {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const addCourseToCart = createAsyncThunk(
  "cart/addCourseToCart",
  async ({ id, course }, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post(`${url}/enrollCourse`, { id, course });
      return res.data;
    } catch (err) {
      if (err.message == "Network Error") {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ id, course }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await axios.post(`${url}/unenrollCourse`, { id, course });
      dispatch(stopLoading());
      return res.data;
    } catch (err) {
      dispatch(stopLoading());
      if (err.message == "Network Error") {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const emptyCart = createAsyncThunk(
  "cart/emptyCart",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const res = await axios.post(`${url}/emptyCart`, { id });
      dispatch(stopLoading());
      return res.data;
    } catch (err) {
      dispatch(stopLoading());
      if (err.message == "Network Error") {
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err.response.data.error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateTotal: function (state) {
      state.total = state.cartItems
        .reduce((acc, item) => {
          return acc + item.discountedPrice;
        }, 0)
        .toFixed(2);
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [getCoursesInCart.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    [getCoursesInCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.amount = action.payload?.length;
    },
    [getCoursesInCart.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [addCourseToCart.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    [addCourseToCart.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.cartItems = action.payload;
      state.amount = action.payload?.length;
    },
    [addCourseToCart.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [removeFromCart.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.cartItems = action.payload;
      state.amount = action.payload?.length;
    },
    [removeFromCart.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [emptyCart.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
    },
    [emptyCart.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.cartItems = action.payload;
      state.amount = action.payload?.length;
      state.total = 0;
    },
    [emptyCart.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { calculateTotal, clearState } = cartSlice.actions;
export default cartSlice.reducer;
