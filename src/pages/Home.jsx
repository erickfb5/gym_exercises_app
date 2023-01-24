import { Box } from "@mui/material";
import { useState } from "react";

import { HeroBanner, Exercises, SearchExercises } from "../components";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
       setExercises={setExercises}
       bodyPart={bodyPart}
       setBodyPart={setBodyPart} />
    </Box>
  );
};

export default Home;
