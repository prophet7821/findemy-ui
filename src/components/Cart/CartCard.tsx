// @ts-ignore
import {
  Alert,
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import BestsellerComponent from "../Carousel/BestSellerChip";
import {useDispatch,useSelector} from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { useState } from "react";
import { getUser } from "../../features/user/userSlice";

const CartCard = ({ course }) => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state:any) => state.user);
  const [open, setOpen] = useState(false);

  const handleRemoveFromCart = () => {
      dispatch(removeFromCart({ id: userInfo["_id"], course: course }));
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Removed From Cart
        </Alert>
      </Snackbar>
      <CardActionArea disableRipple>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt={course.title}
            image={course.thumbnail}
            height="100%"
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
            {course?.isBestSeller && (
              <BestsellerComponent
                sx={{
                  color: "#3d3c0a",
                  width: {
                    xs: "3rem",
                    sm: "4.5rem",
                    md: "5.5rem",
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
          <Box sx={{ p: 1, flexGrow: 1 }}>
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
              {`$${course.discountedPrice}`}
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
              {`$${course.originalPrice}`}
            </Typography>
          </Box>
          <Box sx={{ p: 1, flexGrow: 0 }}>
            <Typography
              variant="button"
              onClick={handleRemoveFromCart}
              sx={{
                fontSize: {
                  xs: "0.5rem",
                  sm: "0.8rem",
                  md: "1rem",
                },
                color: "#5624d0",
              }}
            >
              Remove
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CardActionArea>
    </>
    
  );
};

export default CartCard;
