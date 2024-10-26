import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const YearlyLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalRequirement"
          stroke="#8884d8"
          name="Total Requirement (MT)"
        />
        <Line
          type="monotone"
          dataKey="totalAvailability"
          stroke="#82ca9d"
          name="Total Availability (MT)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default YearlyLineChart;
