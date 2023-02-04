// @ts-ignore
import { Alert, Container, Grid, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BestsellerComponent from "../Carousel/BestSellerChip";
import LanguageIcon from "@mui/icons-material/Language";
import BuyButton from "./BuyButton";
import { useSelector, useDispatch } from "react-redux";
import { addCourseToCart, clearState } from "../../features/cart/cartSlice";

const DetailHeader = () => {
  const { details } = useSelector((state: any) => state.course);
  const { userInfo } = useSelector((state: any) => state.user);
  const { errorMessage, isError, isSuccess } = useSelector(
    (state: any) => state.cart
  );

  const dispatch = useDispatch();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setSuccessOpen(true);
      dispatch(clearState());
    }
    if (isError) {
      setErrorOpen(true);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  const handleAddToCart = () => {
    if (!userInfo) setLoginError(true);
    else {
      const id = userInfo["_id"];
      dispatch(addCourseToCart({ id, course: details }));
    }
  };

  const handleLoginErrorClose = () => {
    setLoginError(false);
  };
  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };
  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  return (
    <>
      <Snackbar
        open={successOpen}
        autoHideDuration={10000}
        onClose={handleSuccessClose}
      >
        <Alert
          variant="filled"
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {`Added to Cart`}
        </Alert>
      </Snackbar>
      <Snackbar
        open={loginError}
        autoHideDuration={10000}
        onClose={handleLoginErrorClose}
      >
        <Alert
          variant="filled"
          onClose={handleLoginErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Cannot add to cart without login
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorOpen}
        autoHideDuration={10000}
        onClose={handleErrorClose}
      >
        <Alert
          variant="filled"
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>

      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "black",
          color: "white",
          p: 1,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            my: 3,
          }}
        >
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                }}
              >
                <video width="100%" controls>
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02px",
                    fontSize: {
                      md: "2rem",
                      xs: "1rem",
                    },
                  }}
                >
                  {details?.title}
                </Typography>
              </Grid>
              <Grid item>{details?.description}</Grid>

              <Grid item>
                <Grid container spacing={1}>
                  {details?.isBestSeller && (
                    <Grid item>
                      <BestsellerComponent
                        sx={{
                          color: "#3d3c0a",
                          p: "0.4rem",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: {
                              xl: "1.5rem",
                              lg: "1.2rem",
                              md: "1rem",
                              sm: "0.8rem",
                              xs: "0.6rem",
                            },
                          }}
                        >
                          BestSeller
                        </Typography>
                      </BestsellerComponent>
                    </Grid>
                  )}
                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{
                        color: "#b4690e",
                        fontWeight: "1000",
                        letterSpacing: "-0.02",
                        fontSize: {
                          xl: "1.5rem",
                          lg: "1.2rem",
                          md: "1rem",
                          sm: "0.8rem",
                          xs: "0.6rem",
                        },
                      }}
                    >
                      {details?.rating}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: {
                          xl: "1.5rem",
                          lg: "1.2rem",
                          md: "1rem",
                          sm: "0.8rem",
                          xs: "0.6rem",
                        },
                      }}
                    >
                      {`(${details?.numOfRatings})`}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: {
                          xl: "1.5rem",
                          lg: "1.2rem",
                          md: "1rem",
                          sm: "0.8rem",
                          xs: "0.6rem",
                        },
                      }}
                    >
                      {`10 students`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item> Created By</Grid>
                  <Grid item>{details?.author}</Grid>
                </Grid>
              </Grid>
              <Grid item>
                <LanguageIcon />
                English
              </Grid>
              <Grid item xs={11} sx={{ display: { xs: "flex", md: "none" } }}>
                <BuyButton
                  variant="outlined"
                  sx={{ width: "100%" }}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </BuyButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailHeader;
