// 
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CheckoutButton from "./CheckoutButton";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const SummaryCard = () => {
  const { cartItems, amount, total } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [amount]);

  return (
    <Stack sx={{ width: "100%", m: 1 }} spacing={2}>
      <Grid>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "700",
            lineHeight: "1.2",
            letterSpacing: "-0.02rem",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.6rem",
              lg: "2rem",
              xl: "2.4rem",
            },
          }}
          gutterBottom
        >
          Summary
        </Typography>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item>Total</Grid>
        <Grid item>{`$${total}`}</Grid>
      </Grid>
      <Grid>
        <Divider />
      </Grid>
      {amount>0 && (
        <Grid>
          <CheckoutButton
            sx={{ width: "100%" }}
            variant="outlined"
            onClick={() => {
              navigate('/checkout');
            }}
            disableRipple
            disableElevation
          >
            Proceed to Checkout
          </CheckoutButton>
        </Grid>
      )}
    </Stack>
  );
};

export default SummaryCard;
