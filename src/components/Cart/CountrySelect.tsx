// @ts-ignore
import { Select, styled} from '@mui/material';
import React from 'react'

const CountrySelect = styled(Select)({
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #000",
      borderRadius: 0,
      "&.Mui-focused fieldset": {
        border: "1px solid #000",
        borderRadius: 0,
      },
    },
  });

export default CountrySelect