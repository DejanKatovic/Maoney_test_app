import React from "react";
import { Typography } from "../../../../CustomUI/typography";
import { CustomContainer } from "../../../../CustomUI/customContainer";

export const MainTitle = ({ header, title, detail, sx }) => {
  return (
    <CustomContainer
      sx={{
        maxWidth: "692px",
        mt: { xs: "64px", md: "112px" },
        mb: { xs: "30px", md: "52px" },
        ...sx,
      }}
    >
      <Typography.TitleHeader>{header}</Typography.TitleHeader>
      <Typography.Title sx={{ mt: { xs: 1.5, lg: 2 }, mb: 1.5 }}>
        {title}
      </Typography.Title>
      <Typography.Detail sx={{ maxWidth: "560px" }}>{detail}</Typography.Detail>
    </CustomContainer>
  );
};
