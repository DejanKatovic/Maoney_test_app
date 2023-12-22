import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Typography } from "../../../CustomUI/typography";
import { useNavigate } from "react-router-dom";
import { RoundButton } from "../../../CustomUI/roundButton";
import { Instagram } from "../../../assets/icons/instagram.jsx";
import { Twitter } from "../../../assets/icons/twitter.jsx";
import { YouTube } from "../../../assets/icons/youtub.jsx";
import { Tiktok } from "../../../assets/icons/ticTokIcon.jsx";
import { IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const socialMedias = [
  {
    title: "Instagram",
    icon: <Instagram />,
    link: "#",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    link: "#",
  },
  {
    title: "Tiktok",
    icon: <Tiktok />,
    link: "#",
  },
  {
    title: "YouTube",
    icon: <YouTube />,
    link: "#",
  },
];
const NavigationItem = ({ title, tags }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography.SubTitle sx={{ fontSize: { xs: "1rem", lg: "1.25rem" } }}>
        {title}
      </Typography.SubTitle>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {tags?.map((entry) => (
          <Box
            key={uuidv4()}
            onClick={() =>
              navigate(`${entry.split(" ").join("&").toLowerCase()}`)
            }
            sx={{
              "&:hover": {
                ".tagTitle": { color: "primary.main" },
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              },
            }}
          >
            <Typography.Article
              sx={{ fontSize: { xs: 14, lg: 16 }, textAlign: "left" }}
              className={"tagTitle"}
            >
              {entry}
            </Typography.Article>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const navigations = [
  {
    title: "Company",
    tags: ["About", "Contact", "Blog"],
  },
  {
    title: "Product",
    tags: [
      "Money conversion",
      "International transactions",
      "International transactions",
    ],
  },
  {
    title: "Legal",
    tags: ["Terms & conditions", "Privacy policy"],
  },
];
export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#F9F9F9",
      }}
    >
      <Box
        sx={{
          maxWidth: "1264px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: { xs: 5, lg: 6.75 },
          pt: { xs: 6.75, lg: 9 },
          pb: { xs: 6, lg: 9 },
          px: { xs: 3, lg: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              width: "100%",
              maxWidth: "565px",
              className: "wrapper-navigations",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {navigations.map((entry) => (
                <NavigationItem
                  key={uuidv4()}
                  title={entry.title}
                  tags={entry.tags}
                />
              ))}
            </Box>
          </Box>
          <Box
            className="feedbackSubmitForm"
            sx={{
              display: { xs: "none", lg: "flex" },
              flexShrink: 2,
              flexGrow: 1,
              width: "100%",
              maxWidth: "498px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Box>
                <Typography.SubTitle
                  sx={{ fontSize: { xs: "1rem", lg: "1.25rem" } }}
                >
                  Sign up for our newsletter
                </Typography.SubTitle>
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Enter Email"
                  InputProps={{
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <Box
                    //       component="span"
                    //       sx={{
                    //         borderRadius: "50%",
                    //         display: "flex",
                    //         alignItems: "center",
                    //         justifyContent: "center",
                    //         width: "40px",
                    //         height: "40px",
                    //         bgcolor: "primary.main",
                    //       }}
                    //     ></Box>
                    //   </InputAdornment>
                    // ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <RoundButton onClick={() => {}}>Subscribe</RoundButton>
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: "50px",
                      py: "5px",
                      pl: "24px",
                      pr: "6px",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mr: "-16px",
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 5 }}>
            {socialMedias.map((entry) => (
              <IconButton
                key={uuidv4()}
                sx={{
                  width: "40px",
                  height: "40px",
                  color: "linear-gradient(180deg, #6364FF 0%, #563ACC 100%)",
                  bgcolor: "white",
                }}
              >
                {entry.icon}
              </IconButton>
            ))}
          </Box>
          <Box>
            <Typography.Detail>
              © 2023, FinanaceFast All Rights Reserved.
            </Typography.Detail>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
