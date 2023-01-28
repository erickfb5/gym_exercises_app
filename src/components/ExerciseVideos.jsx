import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log("exerciseVideos", exerciseVideos);
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ marginTop: { xs: "20px", lg: "200px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>
        exercise videos
      </Typography>
      <Stack
        alignItems="center"
        justifyContent=" flex-start"
        flexWrap="wrap"
        sx={{ flexDirection: { lg: "row" }, gap: { xs: 0, lg: "110px" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
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
