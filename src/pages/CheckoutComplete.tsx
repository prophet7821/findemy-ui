import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";

const CheckoutComplete = () => {
  return (
    <DefaultLayout>
      <Container
        maxWidth="md"
        sx={{
          p: {
            xs: "1rem",
            md: "6rem",
          },
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <iframe src="https://embed.lottiefiles.com/animation/13491"></iframe>
          </Grid>
          <Grid item>
            <Typography> Your Order is Complete</Typography>
          </Grid>
          <Grid item>
            <Typography>
              You will be recieving a confirmation email with other details
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default CheckoutComplete;
