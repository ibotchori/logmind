import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

function EventsChart() {
  /* Get data from redux */
  const data = useSelector((state) => state.getData.data);

  /* Save data from redux to state (to prevent the chart from changing when the redux data changes) */
  const [state, setState] = useState(data);

  /* Custom Styles */
  const useStyles = makeStyles({
    root: {
      backgroundColor: "white",
      width: "96%",
      margin: "20px 40px",
      display: "flex",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h4 style={{ writingMode: "vertical-rl", textAlign: "center" }}>
        #Events
      </h4>
      <ResponsiveContainer width="96%" height={200}>
        <AreaChart
          width={730}
          height={250}
          data={state}
          margin={{ top: 35, right: 30, left: 0, bottom: 15 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="60%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="60%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="1" vertical="" />
          <Tooltip contentStyle={{width: "200px", border: "0", fontSize: '12px', borderRadius: '5px', fontWeight:'bold', padding: '10px 0 10px 20px'}} itemStyle={{}}  cursor={false}/>
          <Area
            type="monotone"
            dataKey="Count"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="Severity"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
            activeDot={{ r: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default EventsChart;
