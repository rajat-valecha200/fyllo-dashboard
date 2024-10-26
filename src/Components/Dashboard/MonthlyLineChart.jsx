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

const MonthlyLineChart = ({ data, product }) => {
  return (
    <div className="chart-section">
      <div className="chart-container">
        <h2>Monthly Analysis for {product}</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="requirement_in_mt_"
              stroke="#8884d8"
              name="Requirement (MT)"
            />
            <Line
              type="monotone"
              dataKey="availability_in_mt_"
              stroke="#82ca9d"
              name="Availability (MT)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyLineChart;
