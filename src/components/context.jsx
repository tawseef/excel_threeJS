import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [excelData, setExcelData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        excelData,
        setExcelData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
