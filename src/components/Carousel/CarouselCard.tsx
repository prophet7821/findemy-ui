// @ts-ignore

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import BestsellerComponent from "./BestSellerChip";
import { useNavigate } from "react-router-dom";
import CarouselCardSkeleton from "./CarouselCardSkeleton";
const CarouselCard = (course) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: "100%" }}>
        <CardActionArea
          disableRipple
          sx={{ height: "100%" }}
          onClick={() => {
            navigate({
              pathname: `/courseDetails/`,
              search: `?course=${course?._id}`,
            });
          }}
        >
          <Stack>
            <Box>
              <CardMedia
                component="img"
                image={course?.thumbnail}
                alt="courseThumbnail"
              />
            </Box>
            <Box>
              <CardContent>
                <Typography
                
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02",
                  }}
                >
                  {course?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                          xs: "1rem",
                          md: "1.25rem",
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
                          xs: "0.8rem",
                          md: "1rem",
                        },
                      }}
                    >
                      {`(${course?.numOfRatings})`}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{
                        fontWeight: "100",
                        lineHeight: "1.2",
                        letterSpacing: "-0.02",
                        textDecoration: "line-through",
                      }}
                    >
                      {`$${course?.originalPrice}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{
                        fontWeight: "700",
                        lineHeight: "1.2",
                        letterSpacing: "-0.02",
                      }}
                    >
                      {`$${course?.discountedPrice}`}
                    </Typography>
                  </Grid>
                </Grid>
                <Box sx={{ width: "5.5rem" }}>
                  {course?.isBestSeller && (
                    <BestsellerComponent
                      sx={{
                        color: "#3d3c0a",
                        width: "100%",
                        p: "0.4rem",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                        }}
                      >
                        BestSeller
                      </Typography>
                    </BestsellerComponent>
                  )}
                </Box>
                <Box sx={{ width: "5.5rem" }}>
                  {!course?.isBestSeller && (
                    <Box
                      sx={{
                        color: "#3d3c0a",
                        width: "100%",
                        p: "0.4rem",
                      }}
                    ></Box>
                  )}
                </Box>
              </CardContent>
            </Box>
          </Stack>
        </CardActionArea>
    </Card>
  );
};

export default CarouselCard;
