import React, { useContext } from "react";
import * as XLSX from "xlsx";
import { DataContext } from "./context";

const ExcelReader = () => {
  const context = useContext(DataContext);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const allSheetsData = {};
      workbook.SheetNames.forEach((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        allSheetsData[sheetName] = jsonData;
      });

      context.setExcelData([allSheetsData]);
      console.log(allSheetsData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Insert the Excel File</h2>
      <input
        type="file"
        onChange={handleFileUpload}
        accept=".xlsx, .xls"
        required
      />
    </div>
  );
};

export default ExcelReader;
