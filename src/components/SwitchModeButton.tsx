import { Box } from "@mui/material";
import React from "react";
import { ColorContext } from "../ColorContext";
import { MaterialUISwitch } from "./MaterialUISwitch";


export const SwitchModeButton = () => {
    const colorMode = React.useContext(ColorContext);

    return (
        <Box
            sx={{
                display: "flex"
            }}
        >
            <MaterialUISwitch
                sx={{ ml: 1 }}
                onChange={colorMode.toggleColorMode}
            />
        </Box>
    );
};