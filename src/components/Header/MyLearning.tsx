// 
import { Typography } from "@mui/material";
import React from "react";
import {useSelector} from 'react-redux'

const MyLearning = () => {
  const {userInfo} = useSelector((state: any) => state.user)
  return (
    <>
      {userInfo && (
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            color: "black",
          }}
        >
          My Learning
        </Typography>
      )}
    </>
  );
};

export default MyLearning;

<Typography
  noWrap
  component="a"
  href="/"
  sx={{
    color: "black",
  }}
>
  My Learning
</Typography>;
