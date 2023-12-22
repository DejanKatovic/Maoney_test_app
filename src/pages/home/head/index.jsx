import React from "react";
import { Box } from "@mui/material";
import { Typography } from "../../../CustomUI/typography";
import { CustomContainer } from "../../../CustomUI/customContainer";
import { SearchBox } from "../components/searchBox";
import Iphone1 from "../../../assets/imgs/iPhone1.png";
import Iphone2 from "../../../assets/imgs/iPhone2.png";
import Iphone3 from "../../../assets/imgs/iPhone3.png";
import Iphone4 from "../../../assets/imgs/iPhone4.png";
import Mark1 from "../../../assets/imgs/mark1.png";
import Mark2 from "../../../assets/imgs/mark2.png";
import Mark3 from "../../../assets/imgs/mark3.png";
import Mark4 from "../../../assets/imgs/mark4.png";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";

export const Head = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    rtl: true,
  };
  const iphones = [
    {
      src: Iphone1,
      alt: "Iphone1",
    },
    {
      src: Iphone2,
      alt: "Iphone2",
    },
    {
      src: Iphone3,
      alt: "Iphone3",
    },
    {
      src: Iphone4,
      alt: "Iphone1",
    },
  ];
  const marks = [
    {
      src: Mark1,
      alt: "Mark1",
      width: { xs: 95, lg: 150 },
    },
    {
      src: Mark2,
      alt: "Mark2",
      width: { xs: 95, lg: 150 },
    },
    {
      src: Mark3,
      alt: "Mark3",
      width: { xs: 40, lg: 70 },
    },
    {
      src: Mark4,
      alt: "Mark4",
      width: { xs: 95, lg: 150 },
    },
    {
      src: Mark1,
      alt: "Mark5",
      width: { xs: 95, lg: 150 },
    },
    {
      src: Mark2,
      alt: "Mark6",
      width: { xs: 95, lg: 150 },
    },
    {
      src: Mark3,
      alt: "Mark7",
      width: { xs: 40, lg: 70 },
    },
    {
      src: Mark4,
      alt: "Mark8",
      width: { xs: 95, lg: 150 },
    },
  ];
  return (
    <>
      <CustomContainer
        sx={{
          mt: { xs: "125px", md: "250px" },
          mb: { xs: "90px", lg: "140px" },
        }}
      >
        <CustomContainer sx={{ maxWidth: "928px", px: { xs: 3, sm: 0 } }}>
          <Box textAlign={"center"} sx={{ width: "100%" }}>
            <Typography.Heading sx={{ display: "inline" }}>
              Simplify Your International Transactions with
            </Typography.Heading>
            <Typography.Heading
              sx={{ color: "text.thirdly", display: "inline" }}
            >
              {" "}
              One Platform
            </Typography.Heading>
          </Box>
        </CustomContainer>
        <CustomContainer sx={{ maxWidth: "644px", px: { xs: 3, sm: 0 } }}>
          <Typography.Detail>
            Say Goodbye to the Hassles of Traditional Money Transfers.
            FinanceFast allows you effortlessly transfer money anywhere in the
            world with confidence and ease.
          </Typography.Detail>
        </CustomContainer>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ maxWidth: 498, width: "100%" }}>
            <Box>
              <SearchBox />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: "10px", md: "24px" },
            height: { xs: 172, lg: "339px" },
          }}
        >
          {iphones.map((entry, index) => (
            <Box
              component={"img"}
              key={uuidv4()}
              src={entry.src}
              height={"auto"}
              alt={entry.alt}
              sx={{
                objectFit: "fill",
                paddingTop: index === 1 ? 0 : "80px",
                width: { xs: "148px", lg: "267px" },
              }}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          background: "#E5DBFB",
        }}
      >
        <CustomContainer
          sx={{
            justifyContent: "flex-start",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            pl: { xs: 3, lg: 11 },
            pt: { xs: 3, lg: 5 },
            pr: 0,
            py: { xs: "16.5px", md: 5 },
            gap: { xs: 2, md: 9 },
          }}
        >
          <Box sx={{ width: { xs: 236, md: 339 }, flexShrink: 0 }}>
            <Typography.Article
              sx={{
                fontSize: { xs: "0.75rem", md: "1.125rem" },
                lineHeight: 1.5,
                letterSpacing: 0,
              }}
            >
              We're have been recognized by Leading Finance Publications and
              Organizations.
            </Typography.Article>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Slider {...settings}>
              {marks.map((entry) => (
                <Box
                  key={uuidv4()}
                  sx={{
                    width: entry.width,
                    mx: { xs: "16px", md: "45px" },
                    display: "flex!important",
                    alignItems: "center",
                    height: { xs: 47.5, md: 75 },
                  }}
                >
                  <Box
                    component={"img"}
                    src={entry.src}
                    alt={entry.alt}
                    sx={{
                      width: entry.width,
                      height: "auto",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </CustomContainer>
        <Box
          style={{
            width: 88,
            height: "100%",
            right: 0,
            top: 0,
            position: "absolute",
            background:
              "linear-gradient(270deg, #E5DBFB 0%, rgba(229, 219, 251, 0) 100%)",
          }}
        />
      </Box>
    </>
  );
};
