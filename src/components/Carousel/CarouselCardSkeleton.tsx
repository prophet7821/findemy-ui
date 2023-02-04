import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const CarouselCardSkeleton = () => {
  return (
    <Grid container wrap="nowrap">
      <Box sx={{ pt: 0.5 ,m:1,width:"100%"}}>
        <Skeleton variant="rectangular" width="100%" height={118} />
        <Skeleton width="100%" />
        <Skeleton width="100%" />
      </Box>
      
    </Grid>
  );
};

export default CarouselCardSkeleton;
