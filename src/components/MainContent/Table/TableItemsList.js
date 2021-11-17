import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableItem from "./TableItem";

const TableItemsList = () => {

  /* Count & Time  buttons click */
  const [timeButtonArrowPosition, SetTimeButtonArrowPosition] = useState(false);
  const [countButtonArrowPosition, SetCountButtonArrowPosition] =
    useState(false);

  const handleTimeClick = () => {
    SetTimeButtonArrowPosition(!timeButtonArrowPosition);
  };
  const handleCountClick = () => {
    SetCountButtonArrowPosition(!countButtonArrowPosition);
  };

  /* Custom Styles */
  const useStyles = makeStyles({
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
    table: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      marginRight: "35px",
    },
    tableItem: {
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
      borderBottom: "2px solid #F1F1F4",
      padding: "20px",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.buttonBox}>
        <Box className={classes.buttonBoxChild}>
          <Button
            onClick={handleTimeClick}
            variant="text"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Time
            {timeButtonArrowPosition ? (
              <KeyboardArrowDownIcon style={{ paddingLeft: "5px" }} />
            ) : (
              <KeyboardArrowUpIcon style={{ paddingLeft: "5px" }} />
            )}
          </Button>
          <Button
            onClick={handleCountClick}
            variant="text"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Count
            {countButtonArrowPosition ? (
              <KeyboardArrowDownIcon style={{ paddingLeft: "5px" }} />
            ) : (
              <KeyboardArrowUpIcon style={{ paddingLeft: "5px" }} />
            )}
          </Button>
          <Button
            variant="disabled"
            style={{ textTransform: "none", color: "white", padding: "12px" }}
          >
            Severity
          </Button>
        </Box>
      </Box>

      <TableItem time="2020-11-01 06:25:01" count="24 000" severity="high" />
      <TableItem time="2020-11-01 06:25:01" count="28 000" severity="medium" />
      <TableItem time="2020-11-01 06:25:01" count="14 000" severity="high" />
      <TableItem time="2020-11-01 06:25:01" count="8 000" severity="low" />
    </div>
  );
};

export default TableItemsList;
