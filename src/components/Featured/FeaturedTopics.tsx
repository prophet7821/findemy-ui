// 
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MoreCoursesButton from "./MoreCoursesButton";

const FeaturedTopics = () => {
  return (
    <div className="bg-gray-200">
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h2"
            noWrap
            sx={{
              fontWeight: "700",
              fontSize: {
                xs: "0.75rem",
                sm: "1rem",
                md: "2rem",
                lg: "3rem",
              },
              lineHeight: "1.2",
              letterSpacing: "-0.05rem",
            }}
          >
            Featured Topics By Category
          </Typography>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={9} sm={5} md={3}>
            <Grid container direction="column" m={1} spacing={2}>
              <Grid
                item
                sx={{
                  mb: "1.6rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Development
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Python
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  36,354,994 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  11,415,615 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Machine Learning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  7,070,015 students
                </Typography>
              </Grid>
              <Grid
                item
                sx={{ mt: 3, display: { xs: "none", md: "flex" } }}
              >
                <MoreCoursesButton variant="outlined">
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        md: "0.6rem",
                        lg: "0.8rem",
                      },
                    }}
                  >
                    Explore More Courses
                  </Typography>
                </MoreCoursesButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} sm={5} md={3}>
            <Grid container direction="column" m={1} spacing={2}>
              <Grid
                item
                sx={{
                  mb: "1.6rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Business
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Financial Analysis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1,195,282 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  SQL
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  5,977,561 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  PMP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1,733,398 students
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} sm={5} md={3}>
            <Grid container direction="column" m={1} spacing={2}>
              <Grid
                item
                sx={{
                  mb: "1.6rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  IT and Software
                </Typography>
              </Grid>
              <Grid item >
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  AWS Certification
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6,078,244 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Ethical Hacking
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10,931,066 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Cyber Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3,998,037 students
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} sm={5} md={3}>
            <Grid container direction="column" m={1} spacing={2}>
              <Grid
                item
                xs={2}
                sx={{
                  mb: "1.6rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02rem",
                  }}
                >
                  Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Photoshop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10,909,736
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Graphic Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  3,381,052 students
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  noWrap
                  component="a"
                  href="#"
                  sx={{
                    fontWeight: "700",
                    textDecoration: "underline",
                    color: "#5624d0",
                  }}
                >
                  Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2,410,849 students
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ mt: 4, display: { xs: "flex", md: "none" } }}
          >
            <Grid container direction="column" m={2} spacing={2}>
              <MoreCoursesButton variant="outlined">
                <Typography
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  Explore More Courses
                </Typography>
              </MoreCoursesButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeaturedTopics;
