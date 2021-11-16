import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TimelineIcon from "@mui/icons-material/Timeline";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import { Box } from "@mui/system";

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
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box style={{ width: "100%",  display: "flex", justifyContent: "flex-end", padding: "25px 35px" }}>
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
    </Box>
  );
};

export default MainContent;