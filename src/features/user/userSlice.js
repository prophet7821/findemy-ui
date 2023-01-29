import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "../alert/alertSlice";

const initialState = {
  userInfo: null,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const url = "http://localhost:8080/users";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (values, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/login`, values);
      localStorage.setItem("user", JSON.stringify(response.data));
      thunkAPI.dispatch(stopLoading());
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(stopLoading());
      if (error.message == "Network Error") {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (values, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/signup`, values);
      thunkAPI.dispatch(stopLoading());
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(stopLoading());
      if (error.message == "Network Error") {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/getUser`, { id });
      thunkAPI.dispatch(stopLoading());
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(stopLoading());
      if (error.message == "Network Error") {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isError = false;
    },
    logOutUser: (state) => {
      localStorage.removeItem("user");
      state.isSuccess = false;
      state.isError = false;
      state.userInfo = null;
    },
    setInitialLoadUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.userInfo = user;
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.userInfo = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [signUpUser.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.isSuccess = true;
    },
    [signUpUser.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getUser.pending]: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
    },
    [getUser.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.userInfo = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
  }, //for async actions
});

export const { clearState, logOutUser, setInitialLoadUser } = userSlice.actions;
export default userSlice.reducer;
