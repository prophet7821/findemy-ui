// 
import * as React from "react";

import { Box, Toolbar, IconButton, Typography, Container } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavigationBar from "./NavigationBar";
import SearchBox from "./SearchBox";
import AuthButtons from "./AuthButtons";
import MyLearning from "./MyLearning";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";
import DesktopLogo from "./DesktopLogo";
import MobileMenu from "./MobileMenu";
import MobileLogo from "./MobileLogo";
import {useSelector} from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const {userInfo} = useSelector((state: any) => state.user)

  return (
    <NavigationBar
      position="static"
      sx={{ position: "sticky", top: 0, zIndex: 9999 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This is the logo for the desktop*/}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <DesktopLogo />
          </Box>

          {/* This is the Search menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 2 }}>
            <SearchBox />
          </Box>

          {/* This is the dropdown menu for responsive/mobile design */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MobileMenu />
          </Box>

          {/*This is logo for mobile design*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MobileLogo />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MyLearning />
          </Box>

          {/* This is the cart and notification icon */}
          {userInfo && (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  size="large"
                  sx={{ color: "#000" }}
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton size="large" sx={{ color: "#000" }}>
                  <NotificationsIcon />
                </IconButton>
              </Box>
            </>
          )}

          {/* This is the profile icon */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ProfileIcon />
          </Box>

          {/* These are the auth buttons */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <AuthButtons />
          </Box>
        </Toolbar>
      </Container>
    </NavigationBar>
  );
};
export default Header;
