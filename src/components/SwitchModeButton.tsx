import { Box, useTheme } from "@mui/material";
import React from "react";
import { ColorContext } from "../ColorContext";
import { MaterialUISwitch } from "./MaterialUISwitch";


export const SwitchModeButton = () => {
    const colorTheme = useTheme();
    const colorMode = React.useContext(ColorContext);

    return (
        <Box
            sx={{
                display: "flex"
            }}
        >
            {/* {theme.palette.mode} mode */}
            {/* <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
            </IconButton> */}

            <MaterialUISwitch
                sx={{ ml: 1 }}
                onChange={colorMode.toggleColorMode}
            />
        </Box>
    );
};