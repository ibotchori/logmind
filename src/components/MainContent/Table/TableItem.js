import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TableItem = () => {

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
        <Box className={classes.table}>
        <Box className={classes.tableItem}>
          <Typography
            style={{
              marginLeft: "55px",
            }}
          >
            2020-11-01 06:25:01
          </Typography>
          <Typography
            style={{
              marginRight: "30px",
            }}
          >
            24 000
          </Typography>
          <Typography
            style={{
              width: "60px",
              textAlign: "center",
              backgroundColor: "red",
              padding: "2px 20px",
              borderRadius: "5px",
              color: "white",
              marginRight: "85px",
            }}
          >
            high
          </Typography>
        </Box>
      </Box>
    )
}

export default TableItem
