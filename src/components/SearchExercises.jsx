import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      if (search) {
        // const exercisesData = await fetchData()
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      width="100vw"
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
      // ml="-10px" //
      // sx={{ background: "#ff45e92a" }}
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { xs: "30px", lg: "40px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Must Try
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "#b1b1b10",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
