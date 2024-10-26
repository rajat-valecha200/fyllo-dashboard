// Dashboard.jsx
import React, { useState, useMemo } from "react";
import { data } from "../../result";
import FertilizerPieChart from "./FertilizerPieChart";
import YearlyLineChart from "./YearlyLineChart";
import Top3BarChart from "./Top3BarChart";
import MonthlyLineChart from "./MonthlyLineChart";
import ProductSelector from "./ProductSelector";
import "./Dashboard.css";

function aggregateFertilizerData(data) {
  const aggregation = {};
  data.forEach((item) => {
    const { product, requirement_in_mt_, availability_in_mt_ } = item;
    if (!aggregation[product]) {
      aggregation[product] = {
        product,
        totalRequirement: 0,
        totalAvailability: 0,
      };
    }
    aggregation[product].totalRequirement +=
      parseFloat(requirement_in_mt_) || 0;
    aggregation[product].totalAvailability +=
      parseFloat(availability_in_mt_) || 0;
  });
  return Object.values(aggregation);
}

function aggregateYearlyData(data, selectedProduct) {
  const aggregation = {};
  data.forEach((item) => {
    if (selectedProduct === "All" || item.product === selectedProduct) {
      const { month, requirement_in_mt_, availability_in_mt_ } = item;
      if (!aggregation[month]) {
        aggregation[month] = {
          month,
          totalRequirement: 0,
          totalAvailability: 0,
        };
      }
      aggregation[month].totalRequirement += parseFloat(requirement_in_mt_) || 0;
      aggregation[month].totalAvailability +=
        parseFloat(availability_in_mt_) || 0;
    }
  });
  return Object.values(aggregation);
}

function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState("All");
  const aggregatedData = useMemo(() => aggregateFertilizerData(data), []);
  
  // Update yearly data based on selected product
  const yearlyAggregatedData = useMemo(() => aggregateYearlyData(data, selectedProduct), [selectedProduct]);

  const topRequired = [...aggregatedData]
    .sort((a, b) => b.totalRequirement - a.totalRequirement)
    .slice(0, 5);
    
  const leastAvailable = [...aggregatedData]
    .sort((a, b) => a.totalAvailability - b.totalAvailability)
    .slice(0, 5);

  const topFertilizer = topRequired[0]?.product || "DAP";
  const topFertilizerData = data.filter(
    (item) => item.product === topFertilizer
  );

  const top3Required = [...aggregatedData]
    .sort((a, b) => b.totalRequirement - a.totalRequirement)
    .slice(0, 3);

  return (
    <div className="dashboard">
      <h1>Fertilizer Dashboard</h1>
      <div className="horizontal-charts">
        <FertilizerPieChart data={topRequired} title="Top 5 Most Required Fertilizers" />
        <FertilizerPieChart data={leastAvailable} title="Top 5 Least Available Fertilizers" />
      </div>
      <div className="big-chart-section">
        <div className="chart-container">
          <h2>Yearly Availability/Requirement for {selectedProduct}</h2>
          <ProductSelector
            products={["All", ...new Set(data.map((item) => item.product))]}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <YearlyLineChart data={yearlyAggregatedData} />
        </div>
      </div>
      <div className="horizontal-charts">
        <Top3BarChart data={top3Required} />
        <MonthlyLineChart data={topFertilizerData} product={topFertilizer} />
      </div>
    </div>
  );
}

export default Dashboard;
