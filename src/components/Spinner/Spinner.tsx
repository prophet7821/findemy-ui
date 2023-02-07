// 
import { Box, CircularProgress, Grid } from "@mui/material";

const Spinner = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{
      height: "100vh",
    }}>
      <CircularProgress size="10rem"/>
    </Grid>
  );
};

export default Spinner;
