import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Detail, ExerciseVideos, SimilarExercises } from "../components/";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchExercisesData = async () => {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";

        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);
      };
      fetchExercisesData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
