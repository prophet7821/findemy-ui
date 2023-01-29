import { Alert, Grid, Snackbar, Stack, Typography } from "@mui/material";
import InternationalizationButton from "../Header/InternatonalizationButton";
import BuyButton from "./BuyButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToCart, clearState } from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";

const CourseDetailsCard = () => {
  const { details } = useSelector((state: any) => state.course);
  const { userInfo } = useSelector((state: any) => state.user);
  const { errorMessage, isError, isSuccess } = useSelector(
    (state: any) => state.cart
  );

  const dispatch = useDispatch();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleAddToCart = () => {
    if (!userInfo) setLoginError(true);
    else {
      const id = userInfo["_id"];
      dispatch(addCourseToCart({ id, course: details }));
    }
  };

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
        autoHideDuration={6000}
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
        autoHideDuration={6000}
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
        autoHideDuration={6000}
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

      <Stack spacing={2} sx={{ backgroundColor: "white", p: 1 }}>
        <Grid>
          <video width="100%" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        </Grid>
        <Grid>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                lg: "1.8rem",
                md: "1.5rem",
                sm: "1.2rem",
                xs: "1rem",
              },
            }}
          >
            {`$${details?.originalPrice}`}
          </Typography>
        </Grid>
        <Grid container spacing={1} justifyContent="space-around">
          <Grid item xs={8}>
            <BuyButton
              variant="outlined"
              sx={{ width: "100%" }}
              onClick={handleAddToCart}
            >
              Add To Cart
            </BuyButton>
          </Grid>
          <Grid item xs={4}>
            <InternationalizationButton variant="outlined">
              <FavoriteBorderIcon />
            </InternationalizationButton>
          </Grid>
        </Grid>

        <Grid>
          <InternationalizationButton variant="outlined" sx={{ width: "100%" }}>
            Buy Now
          </InternationalizationButton>
        </Grid>
        <Grid container justifyContent="center">
          <Typography>30 days money back gurantee</Typography>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              This course includes
            </Typography>
          </Grid>
          <Grid item>
            <Typography>5.5 hrs of on-demandd video</Typography>
          </Grid>
          <Grid item>
            <Typography>70 downlodable resources</Typography>
          </Grid>
          <Grid item>
            <Typography>13 articles</Typography>
          </Grid>
          <Grid item>
            <Typography>Full lifetime access</Typography>
          </Grid>
          <Grid item>
            <Typography>Access on mobile and TV</Typography>
          </Grid>
          <Grid item>
            <Typography>1 practice test</Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
          <Typography
            component="a"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5rem",
                sm: "0.8rem",
              },
              cursor: "pointer",
            }}
          >
            Share
          </Typography>
          <Typography
            component="a"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5rem",
                sm: "0.8rem",
              },
              cursor: "pointer",
            }}
          >
            Gift This Course
          </Typography>
          <Typography
            component="a"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "0.5rem",
                sm: "0.8rem",
              },
              cursor: "pointer",
            }}
          >
            Apply Coupon
          </Typography>
        </Grid>
      </Stack>
    </>
  );
};

export default CourseDetailsCard;
