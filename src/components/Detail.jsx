import { Stack, Typography } from "@mui/material";

import ExtraDetail from "./ExtraDetail";

const Detail = ({ exerciseDetail }) => {
  const { gifUrl, name, target } = exerciseDetail;

  return (
    <Stack
      width="100vw"
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img className="detail-image" src={gifUrl} alt={name} loading="lazy" />
      <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Execercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy
        </Typography>

        <ExtraDetail exerciseDetail={exerciseDetail} />
      </Stack>
    </Stack>
  );
};

export default Detail;
