import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import { AppBar, Container, IconButton } from "@mui/material";

const CustomFooter = () => {
    return (

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
                    href="https://www.linkedin.com/in/madeline-leclair"
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
                    href="https://github.com/mpleclai"
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
                    href="https://www.instagram.com/thedullpencil/"
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
    );
};
export default CustomFooter;