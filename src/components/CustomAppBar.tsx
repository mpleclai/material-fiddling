import { Article, Brush, Code, Computer, Psychology } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import { SwitchModeButton } from './SwitchModeButton';
import { routes } from "../routes";
import { NavLink, useNavigate } from "react-router-dom";
import {
    Box,
    Link,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Drawer,
    AppBar,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";

const ResponsiveAppBar = () => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => !open}>
            {routes.map((page) => (
                <ListItem button onClick={() => navigate(page.path)} key={page.key}>
                    <Box display='flex' flexDirection='row' >
                        <ListItemIcon>{<page.icon />}</ListItemIcon>
                        <ListItemText primary={page.title} />
                    </Box>
                </ListItem>
            ))}
        </div>
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Computer sx={{ display: { xs: 'none', md: 'flex', }, mr: 2 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Madeline LeClair
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setOpen(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                            {getList()}
                        </Drawer>
                    </Box>
                    <Computer sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Madeline LeClair
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', alignItems: "bottom" }}
                            >
                                {page.name}
                            </Button>
                        ))} */}
                        {routes.map((page) => (
                            <Button
                                key={page.title}
                                onClick={() => navigate(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block', alignItems: "bottom" }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexgrow: 0 }}>
                        <SwitchModeButton />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;