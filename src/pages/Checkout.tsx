// @ts-nocheck
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CartAccordion from "../components/Checkout/CartAccordion";
import CountrySelect from "../components/Cart/CountrySelect";
import CheckoutSummaryCard from "../components/Checkout/CheckoutSummaryCard";
import DefaultLayout from "../components/DefaultLayout";
import countries from "../assets/countries";
import { emptyCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { userInfo } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    country: "",
    state: "",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [states, setStates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkoutComplete");
    dispatch(emptyCart(userInfo["_id"]))
  };

  return (
    <DefaultLayout>
      <Container maxWidth="lg">
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              sx={{ m: 2, display: { xs: "none", md: "flex" } }}
              xs={12}
            >
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
                Checkout
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
                  Billing Address
                </Typography>
              </Grid>

              <Grid item container xs={12} sx={{ m: 1 }}>
                <Grid item xs={5} sx={{ m: 1 }}>
                  <FormControl fullWidth>
                    <CountrySelect
                      displayEmpty
                      required
                      inputProps={{ "aria-label": "Country" }}
                      value={formState.country}
                      onChange={(e) => {
                        setFormState({
                          ...formState,
                          country: e.target.value as string,
                        });

                        const country = countries.find((country) => {
                          return country.country === e.target.value;
                        });

                        setStates(country?.states);
                      }}
                    >
                      <MenuItem disabled value="">
                        <em>Please Select</em>
                      </MenuItem>
                      {countries.map((country, index) => (
                        <MenuItem key={index} value={country.country}>
                          {country.country}
                        </MenuItem>
                      ))}
                    </CountrySelect>
                    <FormHelperText>Please choose a country</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={5} sx={{ m: 1 }}>
                  <FormControl fullWidth>
                    <CountrySelect
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          state: e.target.value as string,
                        })
                      }
                      displayEmpty
                      required
                      inputProps={{ "aria-label": "State/Union Territory" }}
                      value={formState.state}
                    >
                      <MenuItem disabled value="">
                        <em>Please Select</em>
                      </MenuItem>
                      {states?.map((state, index) => (
                        <MenuItem key={index} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </CountrySelect>
                    <FormHelperText>
                      Please choose a State/Union Territory
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid>
                <Divider variant="middle" />
              </Grid>

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
                  Payment Method
                </Typography>
              </Grid>

              <Grid item container xs={12} sx={{ m: 1 }}>
                <CartAccordion
                  formState={formState}
                  setFormState={setFormState}
                />
              </Grid>
            </Grid>

            <Grid item container xs={12} md={3} sx={{ m: 1 }}>
              <CheckoutSummaryCard
                formState={formState}
                setFormState={setFormState}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default Checkout;
