import { Computer, ExpandLess, ExpandMore, School, StarBorder } from "@mui/icons-material";
import { Box, Card, CardContent, Typography, CardMedia, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import React from "react";
import { FC, ReactElement } from "react";

const Resume: FC<any> = (): ReactElement => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <Box
                component={Card}
                variant="outlined"
                display='flex'
                flexDirection='row'
                justifyContent="center"
                sx={{
                    margin: 2,
                    padding: 1,
                    borderColor: "primary.light"
                }}>
                {/* <Box
                    sx={{
                        width: 1 / 8,
                        margin: 2
                    }}>
                    <CardMedia
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        component="img"
                        src={logo}
                    />
                </Box> */}
                <Box
                    // justifyContent='left'
                    sx={{
                        // width: 2 / 3
                        width: 1
                    }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Education
                        </Typography>
                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemIcon>
                                            <School />
                                        </ListItemIcon>
                                        <ListItemText
                                            // primary="Michigan Technological University (2016-2020)"
                                            primary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        color="text.primary"
                                                    >
                                                        Michigan Technological University
                                                    </Typography>
                                                    <Typography
                                                        padding={1}
                                                        component="span"
                                                        color="text.primary"
                                                        variant="body2"
                                                    >
                                                        2016 - 2020
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        color="text.primary"
                                                        variant="body2"
                                                    >
                                                        Major:
                                                    </Typography>
                                                    {' BS Software Engineering'}
                                                    <br></br>
                                                    <Typography
                                                        component="span"
                                                        color="text.primary"
                                                        variant="body2"
                                                    >
                                                        Minors:
                                                    </Typography>
                                                    {' Mathematical Sciences, Spanish International'}
                                                </React.Fragment>
                                            }
                                        />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </CardContent>
                </Box>
            </Box>
            <Box
                component={Card}
                variant="outlined"
                display='flex'
                flexDirection='row'
                // justifyContent="center"
                sx={{
                    margin: 2,
                    padding: 1,
                    borderColor: "primary.light"
                }}>
                <Box
                    sx={{
                        width: { xs: 1, md: 2 / 3, }
                    }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Work Experience
                        </Typography>
                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemIcon>
                                            <Computer />
                                        </ListItemIcon>
                                        <ListItemText primary="Software Engineer - Target " secondary="July 2020 - Present" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>

                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText secondary="Created, documented, and tested components including accessibility testing to ensure features meet WCAG - AA guidelines" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Android Mobile Development"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Kotlin, Groovy, XML, Material Design, Gradle, Jetpack Compose
                                                        </Typography>
                                                        <br></br>
                                                        {' - Worked with a team of engineers on a common UI component library with Android View'}
                                                        <br></br>
                                                        {' - Collaborated on a new version of this library using Jetpack Compose'}
                                                        <br></br>
                                                        {' - Implemented various features for the MyDay application used in stores'}
                                                    </React.Fragment>}
                                            />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            {/* <ListItemText  /> */}
                                            <ListItemText
                                                primary="iOS Mobile Development"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Swift, SwiftUI
                                                        </Typography>
                                                        <br></br>
                                                        {'- Worked with a team of engineers to create a proof of concept for a common UI component library with SwiftUI'}
                                                    </React.Fragment>}
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItem disablePadding onClick={handleClick}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Computer />
                                        </ListItemIcon>
                                        <ListItemText primary="Software Engineering Intern" secondary="Summer 2019" />
                                        {open ? <ExpandLess /> : <ExpandMore />}

                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Backend Java Development"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Java, Groovy, Spock
                                                        </Typography>
                                                        <br></br>
                                                        {'- Collaborated with another intern in an agile environment to develop an API as part of a microservice architecture for utilization by the user profile'}
                                                    </React.Fragment>} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </CardContent>
                </Box>
                <Box
                    sx={{
                        width: 1 / 3,
                        margin: 2,
                        display: { xs: 'none', md: 'flex', }
                    }}>
                    <CardMedia
                        component="img"
                        image={`https://images.unsplash.com/photo-1525097487452-6278ff080c31`}
                        alt="image"
                    />
                </Box>
            </Box >
        </Container >
    );
};

export default Resume;