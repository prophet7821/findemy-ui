import {Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import CheckoutButton from "../Cart/CheckoutButton";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../features/cart/cartSlice";
import { useNavigate} from "react-router-dom";
import {emptyCart} from "../../features/cart/cartSlice";

const CheckoutSummaryCard = ({formState,setFormState}) => {
  const {userInfo} = useSelector((state:any)=>state.user)
  const { cartItems, amount, total,isSuccess,isError} = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [amount]);


  const handleSubmit = ()=>{
    dispatch(emptyCart(userInfo['_id']));
    navigate('/checkoutComplete')
  }

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
            onClick={handleSubmit}
            disableRipple
            disableElevation
          >
            Complete Checkout
          </CheckoutButton>
        </Grid>
      )}
    </Stack>
  );
};

export default CheckoutSummaryCard;
