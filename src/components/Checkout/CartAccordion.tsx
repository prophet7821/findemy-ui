// @ts-nocheck
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CountrySelect from "../Cart/CountrySelect";

const CartAccordion = ({ formState, setFormState }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [bank, setBank] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <div className="w-100">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <CreditCardIcon sx={{ m: 1 }} />
            <Typography sx={{ m: 1 }}>Credit Card/Debit Card</Typography>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1 }}></Box>
          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
              alt="VISA"
              width="41"
              height="27"
            />
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
              alt="MasterCard"
              width="41"
              height="27"
            />
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
              alt="American Express"
              width="41"
              height="27"
            />
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg"
              alt="Discover"
              width="41"
              height="27"
            />
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-jcb.svg"
              alt="JCB"
              width="41"
              height="27"
            />
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/card-unionpay.svg"
              alt="UnionPay"
              width="41"
              height="27"
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Name on the Card</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                required
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    cardHolderName: e.target.value,
                  });
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Card</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                required
                onChange={(e) => {
                  setFormState({ ...formState, cardNumber: e.target.value });
                }}
              />
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <Typography>Expiry Date</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        expiryDate: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <Typography>CVV/CVC</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: "100%" }}
                    required
                    onChange={(e) => {
                      setFormState({ ...formState, cvv: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/common-upi.svg"
              alt="VISA"
              width="41"
              height="27"
              className="m-2"
            />
            <Typography sx={{ m: 1 }}>UPI</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              Enter your UPI ID / VPA and make payment on your UPI app.
            </Grid>
            <Grid item xs={12}>
              <Typography>UPI/VPA ID</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField sx={{ width: "100%" }} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/common-onlinebanking-in.svg"
              alt="Net Banking"
              width="41"
              height="27"
              className="m-2"
            />
            <Typography sx={{ m: 1 }}>Net Banking</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In order to complete your transaction, we will transfer you over to
            Adyen's secure servers.
          </Typography>
          <CountrySelect
            onChange={(e) => setBank(e.target.value as string)}
            displayEmpty
            inputProps={{ "aria-label": "Bank" }}
            value={bank}
            sx={{ width: "100%" }}
          >
            <MenuItem disabled value="">
              <em>Please Select</em>
            </MenuItem>
          </CountrySelect>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <img
              src="https://www.udemy.com/staticx/udemy/images/v9/common-wallet-in.svg"
              alt="Wallet"
              width="41"
              height="27"
              className="m-2"
            />
            <Typography sx={{ m: 1 }}>Wallet</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In order to complete your transaction, we will transfer you over to
            Adyen's secure servers.
          </Typography>
          <CountrySelect
            onChange={(e) => setWallet(e.target.value as string)}
            displayEmpty
            inputProps={{ "aria-label": "Wallet" }}
            value={wallet}
            sx={{ width: "100%" }}
          >
            <MenuItem disabled value="">
              <em>Please Select</em>
            </MenuItem>
          </CountrySelect>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CartAccordion;
