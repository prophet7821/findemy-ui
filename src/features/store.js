import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import alertReducer from './alert/alertSlice';
import courseReducer from './course/courseSlice';
import filterReducer from './filter/filterSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
    reducer:{
        alert:alertReducer,
        user:userReducer,
        course:courseReducer,
        filter:filterReducer,
        cart:cartReducer
    }
});