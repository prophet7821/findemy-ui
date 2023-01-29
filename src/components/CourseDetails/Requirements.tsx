import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Requirements = () => {
  const { details } = useSelector((state: any) => state.course);
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
        Requirements
      </Typography>
      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
            lineHeight: "1.2",
            letterSpacing: "-0.02px",
          }}
        >
          {details?.requirements}
        </Typography>
      </Box>
    </>
  );
};

export default Requirements;

{
  /* <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                },
                lineHeight: "1.2",
                letterSpacing: "-0.02px",
              }}
            >
              Know the basics of IT
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                },
                lineHeight: "1.2",
                letterSpacing: "-0.02px",
              }}
            >
              Know the basics of IT
            </Typography>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                },
                lineHeight: "1.2",
                letterSpacing: "-0.02px",
              }}
            >
              Know the basics of IT
            </Typography>
          </ListItem>
        </List> */
}
