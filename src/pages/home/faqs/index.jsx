import React from "react";
import { Box, List } from "@mui/material";
import { Typography } from "../../../CustomUI/typography";
import { MainTitle } from "../components/mainTitle";
import { CustomContainer } from "../../../CustomUI/customContainer";
import VectorSvg from "../../../assets/icons/vectorSvg.svg";
import { FaqsItem } from "./faqsItem";
import GoogleStoreImg from "../../../assets/imgs/GoogleStore.png";
import AppStoreImg from "../../../assets/imgs/AppStore.png";
import Iphone2 from "../../../assets/imgs/iPhone 2_2.png";
import msgImg from "../../../assets/imgs/msgIcon.png";
import { v4 as uuidv4 } from "uuid";

const heading = {
  header: "faq's",
  title: "Got questions?",
  detail: "Get the answers to your questions about FastFinance.",
};

const data = [
  {
    title: "How does FinanceFast work?",
    detail:
      "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
  },
  {
    title: "Is it safe to use FinanceFast?",
    detail:
      "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
  },
  {
    title: "Can I track my transfer?",
    detail:
      "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
  },
  {
    title: "Are there any hidden fees with FinanceFast?",
    detail:
      "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.",
  },
];
export const Faqs = () => {
  return (
    <CustomContainer>
      <MainTitle
        header={heading.header}
        title={heading.title}
        detail={heading.detail}
      />
      <List sx={{ maxWidth: "720px", width: "100%" }}>
        {data.map((entry, index) => (
          <FaqsItem
            key={uuidv4()}
            title={entry.title}
            detail={entry.detail}
            sx={{ borderTopWidth: index === 0 ? 0 : 1 }}
          />
        ))}
      </List>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "primary.main",
          borderRadius: 3,
          overflow: "hidden",
          backgroundImage: `url(${VectorSvg})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: { xs: "auto", md: "100%" },
            alignItems: "center",
            px: { xs: "16px", md: "52px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, md: 3 },
              alignItems: { xs: "center", md: "flex-start" },
              flexGrow: 1,
              width: { xs: "100%", md: "50%" },
              mt: { xs: "54px", md: 0 },
            }}
          >
            <Typography.Heading
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: 24, md: 40 },
                lineHeight: { xs: "34px", md: "46px" },
                color: "white",
              }}
            >
              One Solution for All Your Cross-Border Payments
            </Typography.Heading>
            <Box sx={{ display: "flex", gap: { xs: 1.75, md: 2 } }}>
              {[GoogleStoreImg, AppStoreImg].map((entry, index) => (
                <Box
                  component={"img"}
                  key={uuidv4()}
                  alt={index}
                  src={entry}
                  sx={{ width: { xs: 145, md: 160 }, height: "auto" }}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              flexGrow: 1,
              height: { xs: 257, md: 406 },
              width: { xs: "100%", md: "50%" },
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                component={"img"}
                src={Iphone2}
                sx={{ width: { xs: 238, md: 354 }, pt: 7, height: "auto" }}
              />
              <Box
                sx={{
                  width: { xs: 64, md: 140 },
                  height: { xs: 64.17, md: 136.12 },
                  left: { xs: -38, md: -148 },
                  top: {
                    xs: 41.2,
                    md: 119.26,
                  },
                  position: "absolute",
                  transformOrigin: "0 0",
                  zIndex: 2,
                }}
                component={"img"}
                src={msgImg}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};
