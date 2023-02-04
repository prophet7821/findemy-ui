// @ts-nocheck
import {
  Alert,
  Avatar,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ProfileIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.user);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

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
    setOpen(true);
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
      {userInfo && (
        <>
          <Tooltip title="Profile">
            <IconButton
              disableRipple
              sx={{ p: 0 }}
              onClick={handleOpenUserMenu}
            >
              <Avatar alt="Profile Name" sx={{ backgroundColor: "black" }}>
                {getInitials()}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px", display: { xs: "none", md: "flex" } }}
            id="profile"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem disableRipple>
              <Grid container spacing={2}>
                <Grid item>
                  <IconButton size="large" disableRipple>
                    <Avatar
                      alt="Profile Name"
                      sx={{ backgroundColor: "black" }}
                    >
                      {getInitials()}
                    </Avatar>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02rem",
                      fontSize: "1.6rem",
                    }}
                  >
                    {getName()}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "100",
                      lineHeight: "1.2",
                      letterSpacing: "-0.02rem",
                      fontSize: "1rem",
                    }}
                  >
                    {getEmail()}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Typography component="a" href="/">
                Help
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography component="a" onClick={handleLogOut}>
                Sign Out
              </Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default ProfileIcon;
