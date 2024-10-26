import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const FertilizerPieChart = ({ data, title }) => {
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0","#9966FF"];

  return (
    <div className="chart-section">
      <div className="chart-container">
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="totalRequirement"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={20}
              fill="#8884d8"
              labelLine={false}
              label={({ value, name }) => `${name} (${value})`} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
              wrapperStyle={{
                paddingTop: '20px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FertilizerPieChart;
