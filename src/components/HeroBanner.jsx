import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { xs: "70px", lg: "212px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { xs: "40px", lg: "44px" } }}
        mb='23px'
        mt='30px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effetive exercises
      </Typography>

      <Button variant="contained" color="error" href="#exercises"
      sx={{ backgroundColor: '#FF2625', padding: '10px'}}
      >
        Explore Exercises
      </Button>

      <Typography
        color="#FF2625"
        fontSize="200px"
        fontWeight="600"
        sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
      >
        Exercise
      </Typography>
      <img className="hero-banner-img" src={HeroBannerImage} alt="banner" />
    </Box>
  );
};

export default HeroBanner;
