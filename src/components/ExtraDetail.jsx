import { Button, Stack, Typography } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const ExtraDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, target } = exerciseDetail;
  const extraDetails = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return extraDetails?.map((item) => (
    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
      <Button
        sx={{
          background: "#fff2db",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
        }}
      >
        <img
          src={item.icon}
          alt={bodyPart}
          style={{ width: "50px", height: "50px" }}
        />
      </Button>
      <Typography variant="h5" textTransform='capitalize'>{item.name}</Typography>
    </Stack>
  ));
};

export default ExtraDetail;
