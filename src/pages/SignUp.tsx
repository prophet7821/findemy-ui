// @ts-ignore
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import LoginSubmit from "../components/Login/LoginSubmit";
import LoginTextField from "../components/Login/LoginTextField";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, clearState } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, errorMessage } = useSelector(
    (state: any) => state.user
  );

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(values));
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      setSuccessOpen(true);
    }
    if (isError) {
      setErrorOpen(true);
      dispatch(clearState());
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
          Sign Up Sucessfull
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
                Sign Up and Start Learning
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <LoginTextField
                  fullWidth
                  required
                  id="name"
                  placeholder="Name"
                  name="name"
                  autoComplete="name"
                  variant="outlined"
                  onChange={(e) => {
                    setValues({ ...values, name: e.target.value });
                  }}
                />
                <LoginTextField
                  required
                  margin="normal"
                  fullWidth
                  name="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  autoComplete="current-password"
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
                  Sign Up
                </LoginSubmit>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>Already have an account</Grid>
                  <Grid item>
                    <Typography
                      noWrap
                      component="a"
                      href="/login"
                      sx={{
                        color: "#a435f0",
                        fontWeight: "700",
                        textDecoration: "underline",
                      }}
                    >
                      Log in
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default SignUp;
