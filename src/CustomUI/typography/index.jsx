import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const TypographyComponentWithStyles = (defaultStyles) => {
  const TextComponent = ({ children, ...rest }) => {
    return (
      <MuiTypography {...defaultStyles} {...rest}>
        {children}
      </MuiTypography>
    );
  };
  return TextComponent;
};

export const Typography = {
  Heading: TypographyComponentWithStyles({
    width: "100%",
    color: "text.primary",
    fontSize: { xs: "2rem", md: "3rem" },
    fontFamily: "GRIFTER",
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: { xs: "2.5rem", md: "3.5rem" },
    wordwrap: "break-word",
  }),

  Title: TypographyComponentWithStyles({
    width: "100%",
    textAlign: "center",
    color: "text.primary",
    fontSize: { xs: "1.5rem", md: "2.5rem" },
    lineHeight: { xs: "1.75rem", md: "3rem" },
    fontFamily: "Grifter",
    letterSpacing: 0,
    fontWeight: "700",
    wordwrap: "break-word",
  }),
  SubTitle: TypographyComponentWithStyles({
    width: "100%",
    textAlign: "left",
    color: "text.primary",
    fontSize: { xs: "1.25rem", md: "2rem" },
    fontFamily: "Grifter",
    letterSpacing: 0,
    fontWeight: "700",
    wordwrap: "break-word",
  }),
  TitleHeader: TypographyComponentWithStyles({
    width: "100%",
    textAlign: "center",
    color: "text.thirdly",
    fontSize: { xs: 10, md: 14 },
    fontFamily: "Satoshi",
    letterSpacing: 0,
    fontWeight: "700",
    textTransform: "uppercase",
    wordwrap: "break-word",
  }),

  Detail: TypographyComponentWithStyles({
    width: "100%",
    textAlign: "center",
    color: "text.secondary",
    fontSize: { xs: 14, md: 16 },
    fontFamily: "Satoshi",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: { xs: "22px", md: "26px" },
    wordwrap: "break-word",
  }),

  Normal: TypographyComponentWithStyles({}),
  Article: TypographyComponentWithStyles({
    width: "100%",
    textAlign: "center",
    color: "text.secondary",
    fontSize: { xs: 14, md: 24 },
    lineHeight: { xs: "24px", md: "35px" },
    letterSpacing: 0,
    fontFamily: "Satoshi",
    fontWeight: "500",
    wordwrap: "break-word",
  }),
};
