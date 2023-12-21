import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Typography } from "../../../CustomUI/typography";
import { MainTitle } from "../components/mainTitle";
import { CustomContainer } from "../../../CustomUI/customContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Ticket } from "./components/ticket";
import { ImageCard } from "../components/imageCard";
import Iphone2 from "../../../assets/imgs/iPhone2.png";
const tickets = [
  { content: "Expensive high fees and unfavorable exchange rate" },
  { content: "Transfer delays and inconvenience" },
  { content: "Fraud and loss funds" },
  { content: "Traditional in-person transactions" },
  { content: "Lack of transparency" },
  { content: "Limited payment methods" },
  { content: "Complex verfication processes" },
  { content: "Long payment wait times" },
  { content: "Hidden costs" },
  { content: "Currency exchange rates" },
];
const data = {
  title: "Global accounts in minutes",
  detail:
    "FinanceFast solves problems by proving low fees, fast transfers, secure transactions, and a user-friendly platform.",
};
const heading = {
  header: "Cross-Border Transactions",
  title: "Say Goodbye to International Payment Hassles",
  detail:
    "Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store.",
};
export const Transaction = () => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <CustomContainer>
      <MainTitle
        header={heading.header}
        title={heading.title}
        detail={heading.detail}
      />
      <Grid
        container
        sx={{ gap: { xs: "24px", md: "33px" } }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box
            sx={{
              height: "542px",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <Box
              className="topDecoration"
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: 241,
                background:
                  "linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
            <Box
              className="bottomDecoration"
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: 241,
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%)",
              }}
            />
            {tickets.map((entry, index) => (
              <Ticket key={index} content={entry.content} />
            ))}
          </Box>
        </Grid>
        <Divider
          orientation={isSmallDevice ? "horizontal" : "vertical"}
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
            p: { xs: "0 20px", md: "20px 0" },
          }}
          flexItem
        >
          <Typography.TitleHeader
            sx={{
              fontSize: { xs: 15, md: 18 },
              color: "text.secondary",
            }}
          >
            VS
          </Typography.TitleHeader>
        </Divider>
        <Grid
          item
          xs={12}
          md
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <ImageCard src={Iphone2} title={data.title} detail={data.detail} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};
