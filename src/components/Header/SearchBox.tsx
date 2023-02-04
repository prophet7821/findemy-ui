// @ts-nocheck
import { InputAdornment, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBoxStyle = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    border: "2px #000",
    borderRadius: "40px",
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

const SearchBox = () => {
  const navigate = useNavigate();

  const handleOnKeyPress = (e) => {
    if ((e.target as HTMLInputElement).value.length > 2)

    if (e.key === "Enter") {
      navigate({
        pathname: "/search",
        search: `?searchQuery=${(e.target as HTMLInputElement).value}`,
      });
    }
  };

  return (
    <SearchBoxStyle
      id="searchbox"
      required
      variant="outlined"
      fullWidth
      placeholder="Search for courses..."
      onKeyPress={handleOnKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#000" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
