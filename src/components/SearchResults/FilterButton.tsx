// 
import { Button, styled } from "@mui/material";
import React from "react";

const FilterButton = styled(Button)({
  border: "2px solid #000",
  borderRadius: 0,
  color: "black",
  "&:hover": {
    border: "2px solid #000",
    borderRadius: 0,
  },
});

export default FilterButton;
