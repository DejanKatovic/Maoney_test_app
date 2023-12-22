import React from "react";
import { Divider } from "@mui/material";
import { Typography } from "../../../../CustomUI/typography";
import useMediaQuery from "@mui/material/useMediaQuery";
export const CustomDivder = ({ title = "VS" }) => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Divider
      orientation={isSmallDevice ? "horizontal" : "vertical"}
      sx={{
        height: {
          xs: "auto",
          lg: "100%",
        },
        width: {
          xs: "100%",
          lg: "auto",
          flexShrink: 1,
        },
        maxWidth: 1264,
      }}
      flexItem
    >
      <Typography.TitleHeader
        sx={{
          fontSize: { xs: 15, lg: 18 },
          color: "text.secondary",
        }}
      >
        {title}
      </Typography.TitleHeader>
    </Divider>
  );
};
