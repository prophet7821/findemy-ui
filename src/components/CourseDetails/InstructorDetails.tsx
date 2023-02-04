// @ts-ignore
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";

const InstructorDetails = () => {
  const {details} = useSelector((state:any) => state.course);
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
        Instructor
      </Typography>
      <Grid container spacing={2} sx={{ my: 3 }} justifyContent="space-evenly">
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: {
                xl: "1.8rem",
                lg: "1.5rem",
                md: "1.2rem",
                sm: "1rem",
                xs: "0.8rem",
              },
            }}
          >
            {details?.author}
          </Typography>
        </Grid>
        <Grid container item spacing={4}>
          <Grid item>
            <Avatar
              alt={details?.author}
              src={details?.authorImage}
              sx={{
                width: {
                  lg: 100,
                  sm: 80,
                },
                height: {
                  lg: 100,
                  sm: 80,
                },
              }}
            />
          </Grid>
          <Grid item>
            <Stack spacing={1}>
              <Typography>4.7 Instructor Rating</Typography>
              <Typography>542,740 Reviews</Typography>
              <Typography>10 Students</Typography>
              <Typography>41 Courses</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid item>
          <Typography>
            {details?.authorDescription}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InstructorDetails;
