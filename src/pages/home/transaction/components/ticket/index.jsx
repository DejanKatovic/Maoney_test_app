import React from "react";
import { Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "../../../../../CustomUI/typography";

export const Ticket = ({ content }) => {
  const state = null;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        className="ticket-wrapper"
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
          my: 1,
        }}
      >
        <ClearIcon
          className="clearIcon"
          sx={{
            fontSize: !!state ? 24 : 16,
            color: !!state ? "#F20C0C" : "text.disabled",
          }}
        />
        <Typography.Normal
          sx={{
            textAlign: "left",
            color: "text.secondary",
            fontSize: { xs: 14, md: 16 },
            fontFamily: "Satoshi",
            letterSpacing: 0,
            fontWeight: "400",
            lineHeight: { xs: "22px", md: "26px" },
            wordwrap: "break-word",
          }}
        >
          {content}
        </Typography.Normal>
      </Box>
    </Box>
  );
};
