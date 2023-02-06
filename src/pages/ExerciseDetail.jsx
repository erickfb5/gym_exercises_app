import { Box } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { Detail, ExerciseVideos, SimilarExercises } from "../components/";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
// import { youtubeAPI } from "../utils/fakeAPI";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  const fetchExercisesData = useCallback(async () => {
    try {
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      console.log(":::", exerciseDetailData.name);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail?.name}`,
        youtubeOptions
      );

      console.log("exerciseVideos 01", exerciseVideos);
      setExerciseVideos(exerciseVideoData?.contents.slice(1));
      console.log("exerciseVideos 02", exerciseVideos);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData?.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData?.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    } catch (error) {
      console.log(error);
    }
    // }, []);
  }, [id, exerciseDetail.name,exerciseVideos.videos])

  useEffect(() => {
    fetchExercisesData();
  }, [fetchExercisesData, exerciseDetail.name]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
