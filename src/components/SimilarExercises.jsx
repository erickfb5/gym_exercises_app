import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Detail, ExerciseVideos, HorizontalScrollBar, SimilarExercises } from "../components/";

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
    sx={{mt: {
      xs: '0',
      lg: '100px'
    }}}
    >
      <Typography
      variant="h3"
      >Exercises that target the same muscle group</Typography>
      <Stack
      direction='row'
      sx={{p: '2', position: 'relative'}}
      >
          {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
