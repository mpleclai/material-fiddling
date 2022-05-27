import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            // light: "#546e7a",
            // main: "#819ca9",
            // dark: "#29434e",
            main: '#546e7a',
            contrastText: "#ffffff"
        },
        secondary: {
            light: "#ffa726",
            main: "#ffd95b",
            dark: "#c77800",
            contrastText: "#000000"
        },
        background: {
            default: "#303030",
            paper: "#424242"
        }
    }, components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "#29434e"
                }
            }
        }
    }
};