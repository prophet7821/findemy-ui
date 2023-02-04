// @ts-nocheck
import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BestsellerComponent from "../Carousel/BestSellerChip";
import {useNavigate} from 'react-router-dom'


const CourseCard = ({ course }) => {

  const navigate = useNavigate()

  return (
    <CardActionArea disableRipple onClick={()=>{
      navigate({
        pathname: `/courseDetails/`,
        search: `?course=${course?._id}`,
      });
    }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={course?.title}
            image={course?.thumbnail}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                },
              }}
            >
              {course?.title}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.4rem",
                  sm: "0.5rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.2rem",
                },
              }}
            >
              {course?.description}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                },
              }}
            >
              {course?.author}
            </Typography>

            <Grid container spacing={1}>
              <Grid item>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: "#b4690e",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02",
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.8rem",
                      md: "1rem",
                      lg: "1.2rem",
                      xl: "1.5rem",
                    },
                  }}
                >
                  {course?.rating}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.8rem",
                      md: "1rem",
                      lg: "1.2rem",
                      xl: "1.5rem",
                    },
                  }}
                >
                  {`(${course?.numOfRatings})`}
                </Typography>
              </Grid>
            </Grid>
            <Typography sx={{color:'text.secondary',}}>{course?.level}</Typography>
            {course?.isBestSeller && (
              <BestsellerComponent
                sx={{
                  color: "#3d3c0a",
                  width: {
                    xs: "3rem",
                    sm: "4.5rem",
                    md: "5.5rem",
                    lg: "6.5rem",
                    xl: "7.5rem",
                  },
                  p: "0.4rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      xs: "0.5rem",
                      sm: "0.8rem",
                      md: "1rem",
                      lg: "1.2rem",
                      xl: "1.5rem",
                    },
                  }}
                >
                  BestSeller
                </Typography>
              </BestsellerComponent>
            )}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                },
              }}
            >
              {`$${course?.originalPrice}`}
            </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "1rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                },
              }}
            >
              {`$${course?.discountedPrice}`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CardActionArea>
  );
};

export default CourseCard;
