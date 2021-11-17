import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";

const TableItemsList = () => {
  /* Get data from redux */
  const data = useSelector((state) => state.getDummyData.data);

  /* Sorted data on buttons click */
  const [sortedData, setSortedData] = useState(data);

  /* Count & Time  buttons click */
  const [timeButtonArrowPosition, SetTimeButtonArrowPosition] = useState(false);
  const [countButtonArrowPosition, SetCountButtonArrowPosition] =
    useState(false);

  // Time button click
  const handleTimeClick = () => {
    SetTimeButtonArrowPosition(!timeButtonArrowPosition);
    // Sort array of objects by property
    setSortedData(
      sortedData.sort((a, b) =>
      timeButtonArrowPosition
          ? +a.time < +b.time
            ? 1
            : -1
          : +a.time > +b.time
          ? 1
          : -1
      )
    );
  };

  // Count button click
  const handleCountClick = () => {
    SetCountButtonArrowPosition(!countButtonArrowPosition);
    setSortedData(
      // Sort array of objects by property
      sortedData.sort((a, b) =>
        countButtonArrowPosition
          ? a.Count > b.Count
            ? 1
            : -1
          : a.Count < b.Count
          ? 1
          : -1
      )
    );
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
      {sortedData.map((item) => (
        <TableItem
          time={item.time}
          count={item.Count}
          severity={item.priority}
        />
      ))}
    </div>
  );
};

export default TableItemsList;
