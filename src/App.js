import { ThemeProvider } from "styled-components";

import Home from "./app/Home/";
import { theme } from "./constants";
import { MainContextProvider } from "./contexts/MainContext";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </MainContextProvider>
  );
}

export default App;
