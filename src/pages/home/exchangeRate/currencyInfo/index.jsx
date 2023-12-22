import React from "react";
import { Box } from "@mui/material";
import { Typography } from "../../../../CustomUI/typography";

export const CurrencyInfo = ({ country, CurrencySymbol, detail }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        "&:hover": {
          "& .currency": {
            bgcolor: "primary.main",
            "& .currencySymbol": {
              fontSize: 20,
              color: "white",
            },
          },
        },
      }}
    >
      <Box
        className="currency"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "#EAE7FF",
          borderRadius: "50%",
        }}
      >
        <CurrencySymbol
          className="currencySymbol"
          sx={{ fontSize: 18, color: "text.disabled" }}
        />
      </Box>
      <Box>
        <Typography.SubTitle sx={{ fontSize: { xs: 18, lg: 20 } }}>
          {country}
        </Typography.SubTitle>
        <Typography.Detail>{detail}</Typography.Detail>
      </Box>
    </Box>
  );
};
