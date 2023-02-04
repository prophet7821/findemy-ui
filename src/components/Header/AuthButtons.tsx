// @ts-ignore
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import LanguageIcon from "@mui/icons-material/Language";
import InternationalizationButton from "./InternatonalizationButton";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
const AuthButtons = () => {
  const {userInfo} = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  return (
    <>
      {!userInfo && (
        <Grid container direction="row" spacing={1} justifyContent="center">
          <Grid item>
            <LoginButton
              disableRipple
              disableElevation
              variant="outlined"
              onClick={() => navigate("/login")}
            >
              <Typography>Login</Typography>
            </LoginButton>
          </Grid>
          
          <Grid item>
            <SignUpButton
              disableRipple
              disableElevation
              variant="contained"
              onClick={() => navigate("/signup")}
            >
              <Typography>SignUp</Typography>
            </SignUpButton>
          </Grid>

          <Grid item>
            <InternationalizationButton variant="outlined">
              <LanguageIcon />
            </InternationalizationButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AuthButtons;
