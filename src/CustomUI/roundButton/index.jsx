import { Button } from "@mui/material";

export const RoundButton = ({ children, sx, ...rest }) => {
  return (
    <Button
      {...rest}
      sx={{
        display: "flex",
        borderRadius: 24,
        px: 3,
        py: 1.5,
        color: "white",
        bgcolor: "primary.main",
        fontFamily: "Satoshi",
        textAlign: "center",
        fontSize: { xs: 14, lg: 18 },
        height: 48,
        letterSpacing: 0,
        fontWeight: "500",
        wordwrap: "break-word",
        ...sx,
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
};
