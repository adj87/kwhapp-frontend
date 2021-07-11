import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./app/Home/";
import { theme } from "./constants";
import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </MainContextProvider>
  );
}

export default App;
