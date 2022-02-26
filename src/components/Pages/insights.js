import React from "react";
import { PieChart, Pie } from "recharts";

//delete me

const Insights = () => {
  const data = [
    { name: "Income", students: 400 },
    { name: "Entertainment", students: 700 },
    { name: "Housing", students: 200 },
    { name: "Utilities", students: 1000 },
    { name: "Vehicles", students: 1000 },
    { name: "Food", students: 1000 },
    { name: "Gas", students: 1000 },
    { name: "Misc.", students: 1000 },
  ];

  return (
    <PieChart width={500} height={500}>
      <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
    </PieChart>
  );
};

export default Insights;
