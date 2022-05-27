import { AppBar, Container, createTheme, CssBaseline, IconButton, PaletteMode, Paper, ThemeProvider } from "@mui/material";
import React from 'react';
import { ColorContext } from "./ColorContext";
import CustomAppBar from './components/CustomAppBar';
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";

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
          <AppBar
            position="static"
          >
            <Container maxWidth="xl"
              sx={{
                margin: 2,
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <IconButton
                size="large"
                color="inherit"
              >
                <LinkedIn
                  sx={{
                    height: 40,
                    width: 40
                  }}
                />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <GitHub
                  sx={{
                    height: 40,
                    width: 40
                  }}
                />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
              >
                <Instagram
                  sx={{
                    height: 40,
                    width: 40
                  }}
                />
              </IconButton>
            </Container>
          </AppBar>
        </div>
      </ThemeProvider>
    </ColorContext.Provider >
  );
}

export default App;
