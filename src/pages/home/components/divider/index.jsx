import React from "react";
import { Divider } from "@mui/material";
import { Typography } from "../../../../CustomUI/typography";
import useMediaQuery from "@mui/material/useMediaQuery";
export const CustomDivder = ({ title = "VS" }) => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Divider
      orientation={isSmallDevice ? "horizontal" : "vertical"}
      sx={{
        height: {
          xs: "auto",
          md: "100%",
        },
        width: {
          xs: "100%",
          md: "auto",
          flexShrink: "100o",
        },
        // p: { xs: "0 20px", md: "20px 0" },
      }}
      flexItem
    >
      <Typography.TitleHeader
        sx={{
          fontSize: { xs: 15, md: 18 },
          color: "text.secondary",
        }}
      >
        {title}
      </Typography.TitleHeader>
    </Divider>
  );
};
