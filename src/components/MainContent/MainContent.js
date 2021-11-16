import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TimelineIcon from "@mui/icons-material/Timeline";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainContent = () => {
  /* Toggle icons */
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  /* Custom Styles */
  const useStyles = makeStyles({
    root: {
      backgroundColor: "white",
      width: "96%",
      margin: "20px 40px",
      display: "flex",
      flexDirection: "column",
    },
    toggleButtonBox: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "25px 35px",
    },
    buttonBox: {
      backgroundColor: "#5B88FB",
      display: "flex",
      justifyContent: "center",
      marginRight: "35px",
    },
    buttonBoxChild: {
      display: "flex",
      justifyContent: "space-between",
      width: "70%",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.toggleButtonBox}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <ViewDayIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton fontSize="small" value="right" aria-label="centered">
            <TimelineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={classes.buttonBox}>
        <Box
          className={classes.buttonBoxChild}
        >
          <Button
            variant="text"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Time
            <KeyboardArrowDownIcon style={{ paddingLeft: "5px" }} />
          </Button>
          <Button
            variant="text"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Count
            <KeyboardArrowDownIcon style={{ paddingLeft: "5px" }} />
          </Button>
          <Button
            variant="disabled"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Severity
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
