import React, { useState } from "react";
import styles from "./ToggleChart.module.css";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ChartCheckbox from "./ChartControllers/ChartCheckbox";
import ChartSelect from "./ChartControllers/ChartSelect";
import ChartSlider from "./ChartControllers/ChartSlider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const ToggleChart = () => {
  
  /* Get data from redux */
  const data = useSelector((state) => state.getData.data);

  // Select
  const [xSerriesSelect, setXSerriesSelect] = useState("time");
  const [ySerriesSelect, setYSerriesSelect] = useState("Count");

  const handleChangeX = (event) => {
    setXSerriesSelect(event.target.value);
  };
  const handleChangeY = (event) => {
    setYSerriesSelect(event.target.value);
  };

  // Slider
  const [sliderValueState, setSliderValueState] = useState(5);
  const sliderHandler = (event) => {
    setSliderValueState(event.target.value);
  };

  // Checkbox
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Box style={{ display: "flex" }} className={styles.test}>
      {data.length > 0 ? (
        <>
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
              {checked ? (
                <XAxis dataKey={xSerriesSelect} />
              ) : (
                <XAxis visibility="hidden" />
              )}
              {checked ? <YAxis /> : <YAxis visibility="hidden" />}
              <Tooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey={ySerriesSelect}
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
            <ChartSelect
              handleChangeX={handleChangeX}
              handleChangeY={handleChangeY}
              xSerriesSelect={xSerriesSelect}
              ySerriesSelect={ySerriesSelect}
            />
            <ChartSlider
              sliderHandler={sliderHandler}
              sliderValueState={sliderValueState}
            />
            <ChartCheckbox checked={checked} handleChange={handleChange} />
          </Box>
        </>
      ) : (
        <Box style={{ width: "100%", padding: "50px", textAlign: "center" }}>
          <Typography variant="h5">No results found</Typography>{" "}
        </Box>
      )}
    </Box>
  );
};

export default ToggleChart;
