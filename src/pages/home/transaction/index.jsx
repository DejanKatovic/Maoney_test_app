import React from "react";
import { Box, Grid } from "@mui/material";
import { CustomDivder } from "../components/divider";
import { MainTitle } from "../components/mainTitle";
import { CustomContainer } from "../../../CustomUI/customContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Ticket } from "./components/ticket";
import { ImageCard } from "../components/imageCard";
import Slider from "react-slick";
import Iphone2 from "../../../assets/imgs/iPhone2.png";
import { v4 as uuidv4 } from "uuid";

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
  const settings = {
    className: "center",
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    centerPadding: "-30px",
    slidesToShow: isSmallDevice ? 7 : 9,
    centerMode: true,
    speed: 500,
    focusOnSelect: true,
  };
  return (
    <CustomContainer>
      <MainTitle
        header={heading.header}
        title={heading.title}
        detail={heading.detail}
      />
      <Grid container alignItems="center" columnSpacing={3}>
        <Grid
          item
          xs={12}
          md
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box
            sx={{
              height: "auto",
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              display: "flex",
              "& .slick-center .ticket-wrapper": {
                borderColor: "rgba(147.69, 147.69, 147.69, 0.5)",
                bgcolor: "#F9F9F9",
                "& .clearIcon": {
                  fontSize: 24,
                  color: "#F20C0C",
                },
              },
            }}
          >
            <Box
              className="topDecoration"
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "20%",
                background:
                  "linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)",
                zIndex: 3,
              }}
            />
            <Box
              className="bottomDecoration"
              sx={{
                position: "absolute",
                bottom: 0,
                height: "20%",
                width: "100%",
                zIndex: 4,
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%)",
              }}
            />
            <Slider {...settings}>
              {tickets.map((entry) => (
                <Ticket key={uuidv4()} content={entry.content} />
              ))}
            </Slider>
          </Box>
        </Grid>
        <CustomDivder />
        <Grid
          item
          xs={12}
          md
          sx={{ display: "flex", justifiyContent: "right" }}
        >
          <ImageCard src={Iphone2} title={data.title} detail={data.detail} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};
