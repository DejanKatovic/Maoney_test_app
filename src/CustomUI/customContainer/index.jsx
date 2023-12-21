import React from "react";
import { Box } from "@mui/material";

export const CustomContainer = ({ children, sx, ...rest }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
      }}
      className="custom-container"
    >
      <Box
        {...rest}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1264px",
          px: { xs: 3, lg: 0 },
          pr: { xs: 3, lg: 0 },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
