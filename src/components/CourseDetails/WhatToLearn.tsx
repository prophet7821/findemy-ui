// 
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const WhatToLearn = () => {
  const { details } = useSelector((state: any) => state.course);
  return (
    <Grid container sx={{ border: "1px solid #000", p: 1 }} spacing={1}>
      <Grid item xs={12}>
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
          What You'll Learn
        </Typography>
      </Grid>

      {details?.learningOutcomes?.map((outcome, index) => (
        <Grid item xs={6} key={index}>
          <Box sx={{ my: 1 }}>
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
              {outcome}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhatToLearn;

{
  /* <Grid item xs={6}>
<Stack spacing={2}>
  <Box sx={{ my: 1 }}>
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
      FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
      Architect Associate Certification
    </Typography>
  </Box>

  <Box sx={{ my: 1 }}>
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
      FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
      Architect Associate Certification
    </Typography>
  </Box>
  <Box sx={{ my: 1 }}>
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
      FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
      Architect Associate Certification
    </Typography>
  </Box>
</Stack>
</Grid> */
}

{
  /* <Grid item xs={6}>
        <Stack spacing={2}>
          <Box sx={{ my: 1 }}>
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
              FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
              Architect Associate Certification
            </Typography>
          </Box>
          <Box sx={{ my: 1 }}>
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
              FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
              Architect Associate Certification
            </Typography>
          </Box>
          <Box sx={{ my: 1 }}>
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
              FULLY UPDATED FOR SAA-C03: Pass the AWS Certified Solutions
              Architect Associate Certification
            </Typography>
          </Box>
        </Stack>
      </Grid> */
}
