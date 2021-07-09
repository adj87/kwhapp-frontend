import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./app/Home/";
import { theme } from "./constants";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
