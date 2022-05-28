import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorContext } from "./ColorContext";
import CustomAppBar from './components/CustomAppBar';
import CustomFooter from './components/CustomFooter';
import { routes as appRoutes } from "./routes";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";


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
              <CustomAppBar />
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
          </header>
          <CustomFooter />
        </div>
      </ThemeProvider>
    </ColorContext.Provider >
  );
}

export default App;
