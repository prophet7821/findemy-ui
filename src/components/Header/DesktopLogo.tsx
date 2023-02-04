// @ts-nocheck
import { Typography } from "@mui/material";
import React from "react";

const DesktopLogo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontWeight: 1000,
        color: "black",
        lineHeight: "1.4",
        fontSize: "1.4rem",
        textDecoration: "none",
      }}
    >
      Findemy
    </Typography>
  );
};

export default DesktopLogo;
