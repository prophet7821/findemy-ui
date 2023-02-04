// @ts-nocheck
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import DefaultLayout from "../components/DefaultLayout";
import FeaturedTopics from "../components/Featured/FeaturedTopics";

const Home = () => {
  return (
    <DefaultLayout>
      <div>
        <CarouselComponent />
        <FeaturedTopics />
      </div>
    </DefaultLayout>
  );
};

export default Home;
