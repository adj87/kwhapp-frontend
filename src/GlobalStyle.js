import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider, withTheme } from "styled-components";
import { MainContext } from "./contexts/MainContext";

const GlobalStyle = createGlobalStyle`
body {
  transition: background-color 0.2s ease;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.palette.grey[1] : theme.palette.bodyColor}};
}
`;

export default withTheme(function () {
  const { darkMode } = useContext(MainContext);
  return <GlobalStyle darkMode={darkMode} />;
});
