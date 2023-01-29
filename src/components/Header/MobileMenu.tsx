import { Drawer, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

const MobileMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const toggleNavMenu = (event: any) => {
    if (event.type === "keydown") {
      return;
    }
    setAnchorElNav(!anchorElNav);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="menu-appbar-button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleNavMenu}
        sx={{
          color: "#000",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={anchorElNav}
        onClose={toggleNavMenu}
        sx={{ display: { sx: "flex", md: "none" } }}
        PaperProps={{
          sx: {
            width: "60%",
          },
        }}
      >
        <SideDrawer toggleNavMenu={toggleNavMenu} />
      </Drawer>
    </>
  );
};

export default MobileMenu;
