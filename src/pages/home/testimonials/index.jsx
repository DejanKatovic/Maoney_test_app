import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { MainTitle } from "../components/mainTitle";
import { FeedBackCard } from "./components/feedbackCard";
import Avatar1 from "../../../assets/avatars/avatar1.png";
import { CustomContainer } from "../../../CustomUI/customContainer";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: 1,
    username: "Carl Rowan",
    company: "Aglets Inc",
    avatar: Avatar1,
    detail:
      "“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”",
  },
  {
    id: 2,
    username: "Carl Rowan",
    company: "Aglets Inc",
    avatar: Avatar1,
    detail:
      "“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”",
  },
  {
    id: 3,
    username: "Carl Rowan",
    company: "Aglets Inc",
    avatar: Avatar1,
    detail:
      "“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”",
  },
];
const heading = {
  header: "testimonials",
  title: "What Our Customers are Saying",
  detail:
    "“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”",
};
const NextArrow = ({ onClick }) => (
  <IconButton
    aria-label="next"
    sx={{
      position: "absolute",
      top: "50%",
      right: { xs: 18, md: 247 },
      transform: "translateY(-50%)",
      zIndex: 1,
      width: { xs: 32, md: 48 },
      bgcolor: "white",
      height: { xs: 32, md: 48 },
    }}
    onClick={onClick}
  >
    <NavigateNextIcon sx={{ fontSize: { xs: 16, md: 24 } }} />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="previous"
    sx={{
      position: "absolute",
      top: "50%",
      left: { xs: 18, md: 247 },
      transform: "translateY(-50%)",
      zIndex: 1,
      width: { xs: 32, md: 48 },
      height: { xs: 32, md: 48 },
      bgcolor: "white",
    }}
    onClick={onClick}
  >
    <NavigateBeforeIcon sx={{ fontSize: { xs: 16, md: 24 } }} />
  </IconButton>
);
export const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "175px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: isHovered && <NextArrow />,
    prevArrow: isHovered && <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <CustomContainer>
      <MainTitle
        title={heading.title}
        header={heading.header}
        sx={{ mb: { xs: "44px", md: "72px" } }}
      />
      <Box
        sx={{
          width: "100%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings}>
          {data.map((entry) => (
            <FeedBackCard
              key={uuidv4()}
              userName={entry.username}
              company={entry.company}
              avatar={entry.avatar}
              detail={entry.detail}
            />
          ))}
        </Slider>
      </Box>
    </CustomContainer>
  );
};
