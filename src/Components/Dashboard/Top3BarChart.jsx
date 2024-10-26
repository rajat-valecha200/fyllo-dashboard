import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Top3BarChart = ({ data }) => {
  return (
    <div className="chart-section">
      <div className="chart-container">
        <h2>Yearly Requirement Comparison for Top 3 Fertilizers</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalRequirement" fill="#8884d8" name="Requirement (MT)" />
            <Bar dataKey="totalAvailability" fill="#82ca9d" name="Availability (MT)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Top3BarChart;
