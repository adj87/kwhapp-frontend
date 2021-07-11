import React, { useState } from "react";

export const MainContext = React.createContext({});

export function MainContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MainContext.Provider
      value={{ data, setData, loading, setLoading, darkMode, setDarkMode }}
    >
      {children}
    </MainContext.Provider>
  );
}
