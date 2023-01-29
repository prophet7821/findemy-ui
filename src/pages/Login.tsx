import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import AppleIcon from "../components/Icons/AppleIcon";
import DefaultLayout from "../components/DefaultLayout";
import FacebookIcon from "../components/Icons/FacebookIcon";
import GoogleIcon from "../components/Icons/GoogleIcon";
import LoginSubmit from "../components/Login/LoginSubmit";
import LoginTextField from "../components/Login/LoginTextField";
import SocialLoginButtons from "../components/Login/SocialLoginButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { getCoursesInCart } from "../features/cart/cartSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {userInfo, isSuccess, isError, errorMessage } = useSelector(
    (state: any) => state.user
  );

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      // const user = JSON.parse(localStorage.getItem("user"));
      setTimeout(() => {
        dispatch(getCoursesInCart(userInfo._id));
        navigate("/");
      }, 2000);
      setSuccessOpen(true);
    }
    if (isError) {
      setErrorOpen(true);
    }
  }, [isSuccess, isError]);
  return (
    <>
      <Snackbar
        open={successOpen}
        autoHideDuration={10000}
        onClose={handleSuccessClose}
      >
        <Alert
          variant="filled"
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {`Login Successfull! Welcome ${userInfo?.name}`}
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorOpen}
        autoHideDuration={10000}
        onClose={handleErrorClose}
      >
        <Alert
          variant="filled"
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      <DefaultLayout>
        <Container
          maxWidth="sm"
          sx={{
            p: {
              xs: "1rem",
              md: "6rem",
            },
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item sx={{ m: 5 }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02rem",
                  fontSize: "1.6rem",
                }}
              >
                Log in to Findemy
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Stack spacing={2}>
                <SocialLoginButtons disableRipple>
                  <GoogleIcon />
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02rem",
                    }}
                  >
                    Continue with Google
                  </Typography>
                </SocialLoginButtons>
                <SocialLoginButtons disableRipple>
                  <FacebookIcon />
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02rem",
                    }}
                  >
                    Continue with Facebook
                  </Typography>
                </SocialLoginButtons>
                <SocialLoginButtons disableRipple>
                  <AppleIcon />
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02rem",
                    }}
                  >
                    Continue with Apple
                  </Typography>
                </SocialLoginButtons>

                <form onSubmit={handleSubmit}>
                  <LoginTextField
                    fullWidth
                    required
                    id="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                    }}
                  />
                  <LoginTextField
                    required
                    margin="normal"
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value });
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <LoginSubmit
                    disableRipple
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Log In
                  </LoginSubmit>
                  <Grid container justifyContent="center" spacing={1}>
                    <Grid item>Don't have an account?</Grid>
                    <Grid item>
                      <Typography
                        noWrap
                        component="a"
                        href="/signup"
                        sx={{
                          color: "#a435f0",
                          fontWeight: "700",
                          textDecoration: "underline",
                        }}
                      >
                        Sign Up
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Login;
