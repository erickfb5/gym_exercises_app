import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [newVideos, setNewVideos] = useState([]);
  useEffect(() => {
    const getExVideos = async () => {
      const newVid = await exerciseVideos;
      const data = await newVid;
      // console.log("NEW VID:::", contents);
      setNewVideos(data?.contents);
      return data;
    };
    getExVideos();
  }, [exerciseVideos]);

  // console.log("<newVideos>", newVideos);
  // if (!newVideos) return "Loading...";
  return (
    <Box sx={{ marginTop: { xs: "20px", lg: "200px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        alignItems="center"
        justifyContent=" flex-start"
        flexWrap="wrap"
        sx={{ flexDirection: { lg: "row" }, gap: { xs: 0, lg: "110px" } }}
      >
        {newVideos?.slice(1).map((item, index) => (
          // console.log(item,index)
          // {exerciseVideos?.slice(1, 3).map((item, index) => (
          <a
            className="exercise-video"
            key={index}
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
