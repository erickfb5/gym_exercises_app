import { Box, Stack, Typography } from "@mui/material";

import { logoOne } from "../assets/images/";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logoOne} alt="logo" width="200px" height="40px" />
        <Typography>
          Made with ❤️ by Erick Brandao
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
