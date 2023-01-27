import { Button, Stack, Typography } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems:'center'
      }}
    >
      <img 
      className="detail-image"
      src={gifUrl} alt={name} loading='lazy'/>
      <Typography></Typography>
    </Stack>
  );
};

export default Detail;
