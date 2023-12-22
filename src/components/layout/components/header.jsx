import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import { CustomContainer } from "../../../CustomUI/customContainer";
import { useNavigate } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { RoundButton } from "../../../CustomUI/roundButton";
import { FastForwardRounded } from "../../../assets/icons/FastForwardRounded";
import { MobileIcon } from "../../../assets/icons/mobileIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { v4 as uuidv4 } from "uuid";

const navs = [
  {
    id: 1,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 2,
    title: "Company",
    link: "/company",
  },
  {
    id: 3,
    title: "Products",
    link: "/products",
  },
];

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (link) => {
    navigate(link);
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background: (theme) => theme.palette.background.paper,
            transition: "background 0.3s",
          }}
        >
          <Toolbar sx={{ px: 0 }}>
            <CustomContainer>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: "3rem",
                  pt: { xs: 4, lg: 6 },
                  pb: { xs: 2, lg: 3 },
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    border: {
                      xs: "0",
                      md: "1px solid black",
                    },
                    boxShadow: {
                      xs: "none",
                      md: "0px 4px 4px rgb(0, 0, 0, 0.25)",
                    },
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={() => navigate("/")}
                >
                  <FastForwardRounded
                    sx={{ display: { xs: "flex", md: "none" }, pr: 1 }}
                  />
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 500,
                      fontFamily: "Grifter",
                    }}
                  >
                    FinanceFast
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: "3rem" }}>
                  {navs.map((entry) => (
                    <Box
                      key={uuidv4()}
                      onClick={() => navigate(entry.link)}
                      sx={{
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#3A3A3A",
                          fontSize: 16,
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                          wordwrap: "break-word",
                          textShadow: {
                            xs: "0",
                            md: "0px 4px 4px rgb(0, 0, 0, 0.25)",
                          },
                        }}
                      >
                        {entry.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls={!anchorEl ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={!anchorEl ? "true" : undefined}
                    onClick={handleMenuClick}
                    color="inherit"
                  >
                    <MenuIcon sx={{ color: "text.primary" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={!!anchorEl}
                    onClose={handleMenuClose}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {navs.map((entry) => (
                      <MenuItem
                        key={uuidv4()}
                        sx={{
                          "&:hover": { cursor: "pointer" },
                        }}
                        onClick={() => handleMenuItemClick(entry.link)}
                      >
                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: 16,
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordwrap: "break-word",
                            textShadow: {
                              xs: "0",
                              md: "0px 4px 4px rgb(0, 0, 0, 0.25)",
                            },
                          }}
                        >
                          {entry.title}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <RoundButton
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                    boxShadow: {
                      xs: "none",
                      md: "0px 4px 4px rgb(0, 0, 0, 0.25)",
                    },
                    bgcolor: "primary.light",
                  }}
                >
                  <MobileIcon />
                  <Typography
                    sx={{
                      fontFamily: "Satoshi",
                    }}
                    color="black"
                  >
                    Download
                  </Typography>
                </RoundButton>
              </Box>
            </CustomContainer>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
