import React, { useState } from "react";

export const MainContext = React.createContext({});

export function MainContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [documentToModal, setDocumentToModal] = useState(null);
  const [showChartModal, setShowChartModal] = useState(false);

  return (
    <MainContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        darkMode,
        setDarkMode,
        documentToModal,
        setDocumentToModal,
        showChartModal,
        setShowChartModal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
