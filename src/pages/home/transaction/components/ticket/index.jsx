import React from "react";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "../../../../../CustomUI/typography";
export const Ticket = ({ content }) => {
  const state = null;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: { xs: 1.25, md: 1.5 },
        py: 1,
        gap: 1.5,
        borderRadius: "24px",
        border: "1px rgba(147.69, 147.69, 147.69, 0.50) solid",
        borderColor: !!state
          ? "rgba(147.69, 147.69, 147.69, 0.5)"
          : "transparent",
        bgcolor: !!state ? "#F9F9F9" : "transparent",
        "&:hover": {
          borderColor: "rgba(147.69, 147.69, 147.69, 0.5)",
          bgcolor: "#F9F9F9",
          "& .clearIcon": {
            fontSize: 24,
            color: "#F20C0C",
          },
        },
      }}
    >
      <ClearIcon
        className="clearIcon"
        sx={{
          fontSize: !!state ? 24 : 16,
          color: !!state ? "#F20C0C" : "text.disabled",
        }}
      />
      <Typography.Detail>{content}</Typography.Detail>
    </Box>
  );
};
