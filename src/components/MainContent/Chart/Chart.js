import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Slider from "@mui/material/Slider";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="Severity"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
      <Box
        style={{
          maxWidth: 250,          
          padding: "20px 0 20px 0",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
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
        <FormControl sx={{ m: 1, minWidth: 250 }}>
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
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chart;
