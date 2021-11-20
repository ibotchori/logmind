import React from "react";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ChartSelect = ({
  handleChangeX,
  xSerriesSelect,
  ySerriesSelect,
  handleChangeY,
}) => {
 

  /* Custom Styles */
  const useStyles = makeStyles({
    selectLabel: {
      fontSize: "15px",
      margin: "0 15px 10px 0",
      fontWeight: "bold",
    },
  });
  const classes = useStyles();
  return (
    <Box style={{ paddingBottom: "10px" }}>
      <FormControl sx={{ m: 1, width: 250 }}>
        <Typography className={classes.selectLabel}>X serries</Typography>
        <Select
          value={xSerriesSelect}
          onChange={handleChangeX}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="time">Timestamp</MenuItem>
          <MenuItem value="name">Date</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 250 }}>
        <Typography
         className={classes.selectLabel}
        >
          Y serries
        </Typography>
        <Select
          value={ySerriesSelect}
          onChange={handleChangeY}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="Count">Count</MenuItem>
          <MenuItem value="Severity">Severity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChartSelect;
