import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableItem from "./TableItem";

const TableItemsList = () => {
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

      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  );
};

export default TableItemsList;
