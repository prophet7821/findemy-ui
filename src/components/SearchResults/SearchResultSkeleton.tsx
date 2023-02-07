// 
import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SearchResultSkeleton = () => {
  return (
    <Grid container>
      <Box sx={{ pt: 0.5, m: 1, width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height={118} />
      </Box>
      <Box sx={{ pt: 0.5, m: 1, width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height={118} />
      </Box>
      <Box sx={{ pt: 0.5, m: 1, width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height={118} />
      </Box>
      <Box sx={{ pt: 0.5, m: 1, width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height={118} />
      </Box>
    </Grid>
  );
};

export default SearchResultSkeleton;
