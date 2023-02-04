// @ts-nocheck

import { Box, Container, Snackbar, Typography, Alert } from "@mui/material";
import Carousel from "react-grid-carousel";
import CarouselCard from "./CarouselCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../features/course/courseSlice";
import CarouselCardSkeleton from "./CarouselCardSkeleton";

const CarouselComponent = () => {
  const dispatch = useDispatch();
  const { courses, isError } = useSelector((state: any) => state.course);
  const { loading } = useSelector((state: any) => state.alert);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Server Error!!!! Please Try Again Later
        </Alert>
      </Snackbar>

      <Container sx={{ my: 3 }}>
        <Box sx={{ maxWidth: "80rem" }}>
          <Typography
            variant="h2"
            noWrap
            sx={{
              fontWeight: "700",
              fontSize: {
                xs: "1.5rem",
                md: "2.5rem",
              },
              lineHeight: "1.2",
              letterSpacing: "-0.05rem",
            }}
          >
            Students are viewing
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          {loading ? (
            <CarouselCardSkeleton />
          ) : (
            <Carousel
              cols={5}
              gap={5}
              responsiveLayout={[
                {
                  breakpoint: 1200,
                  cols: 3,
                },
                {
                  breakpoint: 990,
                  cols: 2,
                },
              ]}
            >
              {courses.map((course, index) => {
                return (
                  <Carousel.Item key={course._id}>
                    <CarouselCard {...course} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          )}
        </Box>
      </Container>
    </>
  );
};

export default CarouselComponent;
