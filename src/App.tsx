import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import React from 'react';
import { ColorContext } from "./ColorContext";
import AppBar from './components/CustomAppBar';
import logo from './logo.svg';
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className="App">
          <header className="App-header">
            <Router>
              <AppBar />
              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Router>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </header>
        </div>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
