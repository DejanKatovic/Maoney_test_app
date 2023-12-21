import React from "react";
import { Box } from "@mui/material";
import { CustomContainer } from "../../CustomUI/customContainer";
import { Head } from "./head";
import { Transaction } from "./transaction";
import { ExchangeRate } from "./exchangeRate";
import { Testimonials } from "./testimonials";
import { Faqs } from "./faqs";
const Home = () => {
  return (
    <CustomContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <Head />
        <Transaction />
        <ExchangeRate />
        <Testimonials />
        <Faqs />
      </Box>
    </CustomContainer>
  );
};
export default Home;
