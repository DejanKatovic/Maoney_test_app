import React from "react";
import { Avatar, Box } from "@mui/material";
import { Typography } from "../../../../../CustomUI/typography";

export const FeedBackCard = ({ detail, userName, company, avatar }) => {
  return (
    <Box sx={{ mx: "20px" }}>
      <Box
        sx={{
          height: { xs: 405, md: 450 },
          width: "100%",
          borderRadius: "24px",
          border: "1px rgba(147.69, 147.69, 147.69, 0.50) solid",
          bgcolor: "rgba(229, 219, 251, 0.70)",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
        }}
      >
        <Box
          sx={{
            px: { xs: 5, lg: 12 },
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography.Article>{detail}</Typography.Article>
        </Box>
        <Box
          sx={{
            py: { xs: "25px", md: "32px" },
            width: "100%",
            background: "#E5DBFB",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            borderTop: "1px rgba(147.69, 147.69, 147.69, 0.50) solid",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              alt={`${userName}-${company}`}
              src={avatar}
              sx={{ width: { xs: 54, md: 64 }, height: { xs: 54, md: 64 } }}
            />
            <Box>
              <Typography.Title sx={{ fontSize: { xs: 18, md: 20 } }}>
                {userName}
              </Typography.Title>
              <Typography.Detail sx={{ textAlign: "left" }}>
                {company}
              </Typography.Detail>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
