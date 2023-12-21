import React, { useState } from "react";
import { Box, List, IconButton, ListItemButton, Collapse } from "@mui/material";
import { Typography } from "../../../../CustomUI/typography";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

export const FaqsItem = ({ detail, title, sx }) => {
  const [open, setOpen] = useState(false);
  const handleExpand = (e) => {
    setOpen((prev) => !prev);
    e.stopPropagation();
  };
  return (
    <>
      <ListItemButton
        className="listItem"
        onClick={() => setOpen(true)}
        sx={{
          pt: { xs: 3, md: 4.5 },
          px: 0,
          borderTop: "1px solid #94949480",
          pb: { xs: open ? 1.5 : 3, md: open ? 2 : 4.5 },
          transition: "all .3s ease",
          ...sx,
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Typography.Title
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "left" }}
          >
            {title}
          </Typography.Title>
          <Box flexGrow={1} />
          <Box>
            <IconButton onClick={handleExpand} sx={{ fontSize: 7.5 }}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Typography.Detail sx={{ textAlign: "left" }}>
            {detail}
          </Typography.Detail>
        </List>
      </Collapse>
    </>
  );
};
