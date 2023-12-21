import React from "react";
import { Box, Container } from "@mui/material";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Container sx={{ pr: "2rem", pl: 0 }}>
        <Header />
      </Container>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};
