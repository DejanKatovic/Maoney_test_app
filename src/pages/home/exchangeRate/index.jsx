import React from "react";
import { Box } from "@mui/material";
import { MainTitle } from "../components/mainTitle";
import { CustomContainer } from "../../../CustomUI/customContainer";
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
import { CustomDivder } from "../components/divider";
import { v4 as uuidv4 } from "uuid";

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
  return (
    <CustomContainer>
      <MainTitle
        header={heading.header}
        title={heading.title}
        detail={heading.detail}
      />
      <Box
        sx={{
          gap: { xs: "24px", lg: "33px" },
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <ImageCard
          sx={{ bgcolor: "rgba(241, 221, 255, 0.7) " }}
          customImg={
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: { xs: "183px", lg: "288px" },
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
                        lg: 141,
                      },
                      height: "auto",
                      position: "absolute",
                      bottom: 0,
                      left: { xs: "-45px", lg: "-82px" },
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
                      width: { xs: "200px", lg: "314px" },
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
                      width: { xs: 80, lg: 114 },
                      height: "auto",
                      transform: "rotate(3.76deg)",
                      transformOrigin: "0 0",
                      top: { xs: "-7px", lg: "21.9px" },
                      right: { xs: -32.5, lg: -62 },
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
        <CustomDivder />
        <Box
          sx={{
            flexShrink: 0,
            height: "auto",
            flexDirection: "column",
            justifyContent: "ent-start",
            alignItems: "flex-start",
            display: "flex",
            gap: { xs: 3, lg: 7.5 },
          }}
        >
          {currencies.map((entry) => (
            <CurrencyInfo
              key={uuidv4()}
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
