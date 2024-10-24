import React from "react";
import ExcelReader from "./excelRender";
import Fiber from "./fiber";

const Dashboard = () => {
  return (
    <div>
      <h1>3D Model</h1>
      <ExcelReader />
      <Fiber />
    </div>
  );
};

export default Dashboard;
