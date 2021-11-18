import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";

const TableItemsList = () => {
  /* Get data from redux */
  const data = useSelector((state) => state.getData.data);
  
  // Save data from redux to state 
  const [items, setItems] = useState(data);

  // Overwrite items when redux data is changed
  useEffect(() => {
    setItems(data)
  }, [data])

  /* Count & Time  buttons click */
  const [timeButtonArrowPosition, SetTimeButtonArrowPosition] = useState(false);
  const [countButtonArrowPosition, SetCountButtonArrowPosition] =
    useState(false);

  // Sort items on Time button click 
  const handleTimeClick = () => {
    SetTimeButtonArrowPosition(!timeButtonArrowPosition);
    // Sort array of objects by property
    setItems(
      items.sort((a, b) =>
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

  // Sort items on Count button click
  const handleCountClick = () => {
    SetCountButtonArrowPosition(!countButtonArrowPosition);
    setItems(
      // Sort array of objects by property
      items.sort((a, b) =>
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
      {items.map((item) => (
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
