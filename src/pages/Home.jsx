import { Box } from "@mui/material";
import { useState } from "react";

import { HeroBanner, Exercises, SearchExercises } from "../components";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  console.log('HOME:::', exercises)

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
      exercises={exercises}
       setExercises={setExercises}
       bodyPart={bodyPart}
       />
    </Box>
  );
};

export default Home;
