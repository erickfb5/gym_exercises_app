import { Stack, Typography } from "@mui/material";

import { exercisesImages} from "../utils/exercisesImages";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      className="bodyPart-card"
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}  
    >
  <img
  key={item}
  src={exercisesImages[0][item]}
  alt="dumbbell"
  style={{ width: "180px", height: "160px", borderRadius: '50%', objectFit:'cover' }}
/>
      <Typography
      fontSize='24px'
      fontWeight='bold'
      color='#3A1212'
      textTransform='capitalize'
      >{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
