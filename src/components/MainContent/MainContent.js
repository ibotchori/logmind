import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TimelineIcon from "@mui/icons-material/Timeline";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import { Box } from "@mui/system";
import TableItemsList from "./Table/TableItemsList";
import Chart from "./Chart/Chart";

const MainContent = () => {
  /* Toggle buttons */
  const [alignment, setAlignment] = useState("table");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  /* Custom Styles */
  const useStyles = makeStyles({
    root: {
      backgroundColor: "white",
      paddingBottom: "50px",
      width: "96%",
      margin: "20px 40px",
      display: "flex",
      flexDirection: "column",
      minHeight: "150px",
    },
    toggleButtonBox: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "25px 35px",
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
          <ToggleButton value="table" aria-label="left aligned">
            <ViewDayIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton fontSize="small" value="chart" aria-label="centered">
            <TimelineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        style={{
          border: "1px solid #F1F1F4",
          paddingBottom: "60px",
          marginRight: "35px",
        }}
      >
        {alignment === "table" ? <TableItemsList /> : <Chart/>}
      </Box>
    </Box>
  );
};

export default MainContent;
