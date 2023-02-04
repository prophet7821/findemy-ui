import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { startLoading, stopLoading } from "../alert/alertSlice";

const initialState = {
  courses: [],
  isSuccess: false,
  isError: false,
  errorMessage: "",
  details:{}
};

const url = "https://passport-findemy.onrender.com/courses";



export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.get(`${url}/getAllCourses`);
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

export const getCourseByName = createAsyncThunk(
  "course/getCourseByName",
  async (name, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/getCoursesByName`, { name });
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

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/getCourse`, { id });
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

export const getFilteredCourses = createAsyncThunk(
  "course/getFilteredCourses",
  async ({name,filterState},thunkAPI) => {
    thunkAPI.dispatch(startLoading());
    try {
      const response = await axios.post(`${url}/getFilteredCourses`,{name,filterState});
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
)



const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.courses = [];
      state.details = {};
    }
  },
  extraReducers: {
    [getAllCourses.pending]: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.courses = [];
    },
    [getAllCourses.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.courses = action.payload;
    },
    [getAllCourses.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getCourseByName.pending]: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.courses = [];
    },
    [getCourseByName.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.courses = action.payload;
    },
    [getCourseByName.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getFilteredCourses.pending]: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.courses = [];
    },
    [getFilteredCourses.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.courses = action.payload;
    },
    [getFilteredCourses.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [getCourse.pending]: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.details = {};
    },
    [getCourse.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.details = action.payload;
    },
    [getCourse.rejected]: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    }
  },
});

export const {clearState} = courseSlice.actions;
export default courseSlice.reducer;
