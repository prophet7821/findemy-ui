import React from 'react'
import {TextField,styled} from '@mui/material'

const LoginTextField =  styled(TextField)({
    "& .MuiOutlinedInput-root": {
      border: "1px solid black",
      "&.Mui-focused fieldset": {
        borderColor: "black",
        color: "black",
      },
    },
  });
export default LoginTextField