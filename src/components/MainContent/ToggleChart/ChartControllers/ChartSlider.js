import React from "react";
import { Box } from "@mui/system";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

const ChartSlider = ({sliderHandler, sliderValueState}) => {
  return (
    <Box width={250} style={{ paddingLeft: "10px" }}>
      <Typography
        style={{
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        Line weight
      </Typography>
      <Slider
        size="medium"
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={sliderHandler}
        defaultValue={sliderValueState}
      />
    </Box>
  );
};

export default ChartSlider;
