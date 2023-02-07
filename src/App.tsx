
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesInCart } from "./features/cart/cartSlice";
import { setInitialLoadUser } from "./features/user/userSlice";
import { Snackbar } from "@mui/material";
import Spinner from "./components/Spinner/Spinner";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const SearchResult = React.lazy(() => import("./pages/SearchResult"));
const CourseDetails = React.lazy(() => import("./pages/CourseDetails"));
const CheckoutComplete = React.lazy(() => import("./pages/CheckoutComplete"));
const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const { userInfo } = useSelector((state: any) => state.user);
  const { amount } = useSelector((state: any) => state.cart);
  useEffect(() => {
    if (user) {
      dispatch(getCoursesInCart(user._id));
    }
    dispatch(setInitialLoadUser());
  }, []);

  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/courseDetails" element={<CourseDetails />} />
            <Route
              path="/cart"
              element={userInfo ? <Cart /> : <Navigate to="/login" />}
            />
            <Route
              path="/checkout"
              element={
                userInfo ? (
                  amount > 0 ? (
                    <Checkout />
                  ) : (
                    <Navigate to="/" />
                  )
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/checkoutComplete"
              element={
                userInfo ? (
                 <CheckoutComplete />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
