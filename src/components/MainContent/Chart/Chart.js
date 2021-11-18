import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
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

  return (
    <Box style={{ display: "flex" }}>
      <ResponsiveContainer width="70%" height={400}>
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
    </Box>
  );
};

export default Chart;
