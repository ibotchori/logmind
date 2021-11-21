import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

let fullYear = new Date().getFullYear();

/* Custom Styles */
const useStyles = makeStyles({
  footer: {
    backgroundColor: "#494D58",
    zIndex: "9999",
    display: "flex",
    justifyContent: "end",
    padding: "40px 53px 40px 0",
    color: "#A3A3A3",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography variant="body">© Logmind {fullYear}</Typography>
    </Box>
  );
};
