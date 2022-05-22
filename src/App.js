import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [text,setText] = useState("This is Light Mode");
  const [mode,setMode] = useState("Dark Mode");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    text == "This is Light Mode" ? setText("This is Dark Mode") : setText("This is Light Mode");
    mode == "Dark Mode" ? setMode("Light Mode") : setMode("Dark Mode");
  };

  return (
    <div> 
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>{mode}</button>
        
        <h1>{text}</h1>
      </StyledApp>
    </ThemeProvider>
    </div>
  );
}

export default App;