import React from "react";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LabelIcon from "@mui/icons-material/Label";
import LabelOffIcon from "@mui/icons-material/LabelOff";

const ChartCheckbox = ({ checked, handleChange }) => {
  return (
    <Box style={{ paddingLeft: "10px" }}>
      <FormControlLabel
        control={
          <Checkbox
            icon={<LabelOffIcon />}
            checkedIcon={<LabelIcon />}
            checked={checked}
            inputProps={{
              "aria-label": "primary checkbox",
            }}
            onChange={handleChange}
          />
        }
        label="Show Label"
      />
    </Box>
  );
};

export default ChartCheckbox;
