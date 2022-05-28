import { Box, Card, CardContent, CardMedia, Container, Divider, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";
import picture from '../profile_pic_peru.png';


const About: FC<any> = (): ReactElement => {
    return (
        <Container>
            {/* <Box
                width={1}
                flexDirection='row'
                justifyContent="center"
            >
                <Box
                    component={Card}
                    flexDirection='row'
                    justifyContent="center"
                    sx={{
                        margin: 2,
                        padding: 1,
                        maxWidth: '1',
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <CardMedia
                        sx={{
                            margin: 2
                        }}
                        component="img"
                        src={picture}
                    />
                </Box>
            </Box> */}
            <Box
                component={Card}
                sx={{
                    margin: 2,
                    padding: 1,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <CardMedia
                    sx={{
                        padding: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    component="img"
                    src={picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About Me
                    </Typography>
                    <Divider></Divider>
                    <br></br>
                    <Typography>
                        I am a graduate of Michigan Technological University located in Houghton, Michigan.
                        I have experience from several different organizations and clubs working
                        in leadership positions that include President, Vice President, Secretary, and Treasurer.
                        During the summer of 2017, I spent six weeks studying abroad in Peru and earning credits
                        towards my Spanish International Minor, which I have since completed. I have been working as
                        a software engineer specializing in mobile development for Target since July of 2020.
                    </Typography>
                </CardContent>
            </Box>
            <Card sx={{
                margin: 2,
                padding: 1,
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            </Card>

        </Container >
    );
};

export default About;