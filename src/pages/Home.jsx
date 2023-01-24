import React, { useState } from "react";
import { Box } from "@mui/material";

import { HeroBanner, Exercises, SearchExercises } from "../components";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
