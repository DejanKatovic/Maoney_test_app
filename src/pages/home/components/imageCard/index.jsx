import React from "react";
import { Box } from "@mui/material";
import { Typography } from "../../../../CustomUI/typography";
export const ImageCard = ({ src, title, detail, sx, customImg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "618px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexShrink: 1,
          px: { xs: "15px", md: "32px" },
          pt: { xs: "32px", md: "48px" },
          gap: { xs: 3, md: 5 },
          pb: { xs: 3, md: 4 },
          flexDirection: "column",
          borderRadius: "24px",
          bgcolor: "#EAE7FFB2",
          ...sx,
        }}
      >
        {!!src && (
          <Box
            sx={{
              height: { xs: "183px", md: "288px" },
              width: "auto",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Box
                component={"img"}
                src={src}
                alt={`${title}-img`}
                sx={{
                  flexGrow: 1,
                  objectFit: "contain",
                  width: { xs: "200px", md: "314px" },
                  height: "auto",
                  postion: "absolute",
                  top: 0,
                }}
              />
            </Box>
          </Box>
        )}
        {customImg}
        <Box
          sx={{
            alignItem: "flex-start",
            gap: "8px",
            maxWidth: "459px",
          }}
        >
          <Typography.SubTitle>{title}</Typography.SubTitle>
          <Typography.Detail sx={{ textAlign: "left" }}>
            {detail}
          </Typography.Detail>
        </Box>
      </Box>
    </Box>
  );
};