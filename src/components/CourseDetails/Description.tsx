// @ts-nocheck
import { Typography } from "@mui/material";

import { useSelector } from "react-redux";

const Description = () => {
  const {details} = useSelector((state: any) => state.course);
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: {
            xl: "1.8rem",
            lg: "1.5rem",
            md: "1.2rem",
            sm: "1rem",
            xs: "0.8rem",
          },
        }}
      >
        Description
      </Typography>

      <Typography sx={{
        fontSize:{
            xs: "0.8rem",
            sm: "1rem",
        },
      }}>
        {details?.description}
      </Typography>
    </>
  );
};

export default Description;
