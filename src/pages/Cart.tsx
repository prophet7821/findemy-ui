import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import data from "../assets/data";
import CartCard from "../components/Cart/CartCard";
import SummaryCard from "../components/Cart/SummaryCard";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, amount } = useSelector((state: any) => state.cart);
  return (
    <DefaultLayout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            container
            xs={12}
            md={3}
            sx={{ m: 1, display: { xs: "flex", md: "none" } }}
          >
            <SummaryCard />
          </Grid>
          <Grid item sx={{ m: 2, display: { xs: "none", md: "flex" } }} xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "-0.02rem",
                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                  md: "2.4rem",
                  lg: "2.8rem",
                  xl: "3rem",
                },
              }}
            >
              Shopping Cart
            </Typography>
          </Grid>
          <Grid item container xs={12} md={8} sx={{ m: 1 }}>
            <Grid item xs={12}>
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
              >
                {`${amount} items in the cart`}
              </Typography>
            </Grid>
            <Grid>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <Stack divider={<Divider />} spacing={2} sx={{ width: "100%" }}>
                {cartItems.map((course, index) => (
                  <CartCard key={course._id} course={course} />
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={3}
            sx={{ m: 1, display: { xs: "none", md: "flex" } }}
          >
            {amount>0 && <SummaryCard />}
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
