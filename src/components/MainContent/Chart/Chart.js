import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Slider from "@mui/material/Slider";

import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import LabelIcon from "@mui/icons-material/Label";
import LabelOffIcon from "@mui/icons-material/LabelOff";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  /* Get data from redux */
  const data = useSelector((state) => state.getData.data);

  // Select
  const [xSerriesSelect, setXSerriesSelect] = useState("Timestamp");
  const [ySerriesSelect, setYSerriesSelect] = useState("Count");

  const handleChangeX = (event) => {
    setXSerriesSelect(event.target.value);
  };
  const handleChangeY = (event) => {
    setYSerriesSelect(event.target.value);
  };

  // slider
  const [sliderValueState, setSliderValueState] = useState(5);
  const sliderHandler = (event) => {
    setSliderValueState(event.target.value);
  };

  // checkbox
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Box style={{ display: "flex" }}>
      <ResponsiveContainer width="80%" height={450}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 60,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          {checked ? <XAxis dataKey="name" /> : <XAxis visibility="hidden" />}
          {checked ? <YAxis /> : <YAxis visibility="hidden" />}
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="Severity"
            stroke="#EBB57C"
            fill="#8884d8"
            strokeWidth={sliderValueState}
          />
        </LineChart>
      </ResponsiveContainer>
      <Box
        style={{
          maxWidth: 250,
          padding: "20px 0 80px 10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box style={{ paddingBottom: "10px" }}>
          <FormControl sx={{ m: 1, width: 250 }}>
            <Typography
              style={{
                fontSize: "15px",
                margin: "0 15px 10px 0",
                fontWeight: "bold",
              }}
            >
              X serries
            </Typography>
            <Select
              value={xSerriesSelect}
              onChange={handleChangeX}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Timestamp">Timestamp</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 250 }}>
            <Typography
              style={{
                fontSize: "15px",
                margin: "0 15px 10px 0",
                fontWeight: "bold",
              }}
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
      </Box>
    </Box>
  );
};

export default Chart;
