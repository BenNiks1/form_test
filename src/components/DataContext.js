import React, { createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ cildren }) => {
  const [data, setData] = React.useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {cildren}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
