// 
import {
  Alert,
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import AuthButtons from "./AuthButtons";
import MyLearning from "./MyLearning";
import SearchBox from "./SearchBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logOutUser } from "../../features/user/userSlice";
import { useState } from "react";

const SideDrawer = ({ toggleNavMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state:any) => state.user);
  const [open, setOpen] = useState(false);

  const getInitials = () => {
    const name = JSON.parse(localStorage.getItem("user"))["name"];
    let firstInitial = name.split(" ")[0].charAt(0);
    let lastInitial = name.split(" ")[1].charAt(0);
    return firstInitial + lastInitial;
  };

  const getName = () => {
    return JSON.parse(localStorage.getItem("user"))["name"];
  };

  const getEmail = () => {
    return JSON.parse(localStorage.getItem("user"))["email"];
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Logged Out Successfully!
        </Alert>
      </Snackbar>
      <Grid
        role="presentation"
        container
        spacing={2}
        onKeyDown={toggleNavMenu}
        sx={{ p: 1 }}
        direction="column"
        justifyContent="center"
      >
        <Grid item>
          <IconButton size="large" onClick={toggleNavMenu}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>

        <Grid item container justifyContent="space-around">
          <Grid item>
            <AuthButtons />
          </Grid>
        </Grid>
        <Grid item>
          {userInfo && (
            <Grid container spacing={2}>
              <Grid item>
                <IconButton disableRipple>
                  <Avatar alt="Profile Name" sx={{ backgroundColor: "black" }}>
                    {getInitials()}
                  </Avatar>
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "3vw",
                  }}
                  fontWeight="bold"
                >
                  {getName()}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "3vw",
                  }}
                >
                  {getEmail()}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Divider />
        <Box sx={{ m: 2 }}>
          <SearchBox />
        </Box>
        <Divider />
        <Box sx={{ m: 2 }}>
          <MyLearning />
        </Box>
        {userInfo && (
          <>
            <Box sx={{ m: 2 }}>
              <Typography>Help</Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <Typography noWrap component="a" href="/" onClick={handleLogOut}>
                Sign Out
              </Typography>
            </Box>
          </>
        )}
      </Grid>
    </>
  );
};

export default SideDrawer;
