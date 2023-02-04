// @ts-nocheck
import { Button, Container, Grid, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import FooterInternationalizationalButton from "./FooterInternationalizationButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-100">
      <Container maxWidth="xl">
        <Grid container>
          {/* First Row */}

          <Grid item xs={10} sm={4} md={3}>
            <Grid container direction="column" m={2} spacing={2}>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Udemy Business
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Teach on Udemy
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Get the App
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  About Us
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Contact Us
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{display: { xs: "none",lg:"flex"} }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily:
                      "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
                    fontWeight: 1000,
                    color: "white",
                    lineHeight: "1.4",
                    fontSize: "2rem",
                    textDecoration: "none",
                  }}
                >
                  Findemy
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Row */}

          <Grid item xs={10} sm={4} md={3}>
            <Grid container direction="column" m={2} spacing={2}>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Careers
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Blog
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Help and Support{" "}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Affiliate
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Investors
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/*Third Row*/}
          <Grid item xs={10} sm={6} md={3}>
            <Grid container direction="column" m={2} spacing={2}>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  Terms
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                 Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                 Cookies
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                  SiteMap
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography noWrap component="a" href="#">
                 Accessibility
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={10}
            sx={{ display: { xs: "flex",lg:"none" } }}
          >
            <Grid container m={2} spacing={2}>
              <Grid item xs={9}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily:
                      "udemy sans,sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol",
                    fontWeight: 1000,
                    color: "white",
                    lineHeight: "1.4",
                    fontSize: "1.5rem",
                    textDecoration: "none",
                  }}
                >
                  Findemy
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} md={4} lg={2}>
            <Grid
              container
              m={2}
              spacing={2}
              direction="column"
              justifyContent="space-between"
            >
              <Grid item>
                <FooterInternationalizationalButton variant="outlined">
                  <LanguageIcon />
                  English
                </FooterInternationalizationalButton>
              </Grid>
              <Grid item>
                © 2023 Findemy, Inc.
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
