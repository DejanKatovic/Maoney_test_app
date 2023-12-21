import React from "react";
import { Box, Divider } from "@mui/material";
import { Typography } from "../../../CustomUI/typography";
import { MainTitle } from "../components/mainTitle";
import { CustomContainer } from "../../../CustomUI/customContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageCard } from "../components/imageCard";
import Iphone3 from "../../../assets/imgs/iPhone3.png";
import DollarImg from "../../../assets/imgs/business-3d-flying-dollar.png";
import CoinImg from "../../../assets/imgs/3d-business-pile-of-three-coins.png";
import { CurrencyInfo } from "./currencyInfo";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import { CurrencyWon } from "../../../assets/icons/currencyWon";
import { CurrencyRand } from "../../../assets/icons/currencyRand";
const currencies = [
  {
    country: "Turkish Lira",
    Symbol: CurrencyLiraIcon,
    detail: "₦ 340 to ₺1 + ₦ 2,500 hidden conversion fee ",
  },
  {
    country: "South Africa Rand",
    Symbol: CurrencyRand,
    detail: "₦ 470 to R1 + ₦ 3,100 hidden conversion fee",
  },
  {
    country: "United States",
    Symbol: AttachMoneyIcon,
    detail: "₦ 770 to $1 + ₦ 3,000 hidden conversion fee",
  },
  {
    country: "South Korea Won",
    Symbol: CurrencyWon,
    detail: "₦ 470 to ₩1 + ₦ 5,000 hidden conversion fee",
  },
  {
    country: "China Yuan",
    Symbol: CurrencyYuanIcon,
    detail: "₦ 470 to  ¥1 + ₦ 3,200 hidden conversion fee",
  },
];
const heading = {
  header: "real-time exchange rate",
  title: "Effortlessly Convert Currency",
  detail:
    "Convert your currency from Pounds to Naira or Naira to Dollars. Convert Currency Anytime, Anywhere with FinanceFast's Seamless and Efficient Service.",
};
const data = {
  title: "Zero Hidden Fees",
  detail:
    "Get the Best Exchange Rates with FinanceFast: Convert Currency Hassle-Free, Instantly and Without Fees.",
};
export const ExchangeRate = () => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <CustomContainer>
      <MainTitle
        header={heading.header}
        title={heading.title}
        detail={heading.detail}
      />
      <Box
        sx={{
          gap: { xs: "24px", md: "33px" },
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { lg: 618 },
            justifyContent: "flex-start",
          }}
        >
          <ImageCard
            sx={{ bgcolor: "rgba(241, 221, 255, 0.7) " }}
            customImg={
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    height: { xs: "183px", md: "288px" },
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      component={"img"}
                      sx={{
                        width: {
                          xs: 80,
                          md: 141,
                        },
                        height: "auto",
                        position: "absolute",
                        bottom: 0,
                        left: { xs: "-45px", md: "-82px" },
                        zIndex: -1,
                      }}
                      src={CoinImg}
                    />
                    <Box
                      component={"img"}
                      src={Iphone3}
                      alt={`${data.title}-img`}
                      sx={{
                        objectFit: "contain",
                        width: { xs: "200px", md: "314px" },
                        height: "auto",
                        postion: "absolute",
                        top: 0,
                        zIndex: 2,
                      }}
                    />
                    <Box
                      component={"img"}
                      sx={{
                        position: "absolute",
                        width: { xs: 80, md: 114 },
                        height: "auto",
                        transform: "rotate(3.76deg)",
                        transformOrigin: "0 0",
                        top: { xs: "-7px", md: "21.9px" },
                        right: { xs: -32.5, md: -62 },
                        zIndex: 3,
                      }}
                      src={DollarImg}
                    />
                  </Box>
                </Box>
              </Box>
            }
            title={data.title}
            detail={data.detail}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            height: "100%",
          }}
        >
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
        </Box>
        <Box
          sx={{
            height: "542px",
            flexDirection: "column",
            justifyContent: "ent-start",
            alignItems: "flex-start",
            display: "flex",
            gap: { xs: 3, md: 7.5 },
          }}
        >
          {currencies.map((entry, index) => (
            <CurrencyInfo
              key={index}
              country={entry.country}
              CurrencySymbol={entry.Symbol}
              detail={entry.detail}
            />
          ))}
        </Box>
      </Box>
    </CustomContainer>
  );
};
