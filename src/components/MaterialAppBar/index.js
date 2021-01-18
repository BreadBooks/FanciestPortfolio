import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Fab } from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { grey } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "darkgray",
    },
    title: {
        flexGrow: 1,
        textShadow: '1px 2px 3px black',

    },
    margin: {
        margin: '3px',
    },
    extendedIcon: {
        marginLeft: theme.spacing(0),
    },
    secondary: {
        color: 'pink',
    },
}));

function redirectHome() {
    window.location.replace("/");
}

function redirectProjects() {
    window.location.replace("/Projects");
}

function redirectResume() {
    window.location.replace("/Resume");
}

export default function MaterialAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} onClick={redirectHome}>
                        BreadBooks
                        </Typography>
                    <Fab 
                        size="small"
                        color="secondary"
                        aria-label="add"
                        className={classes.margin}
                        onClick={redirectProjects}>
                        <IconButton>
                            <PaletteIcon fontSize="large" style={{ color: grey[50] }} />
                        </IconButton>
                    </Fab>
                    <Fab 
                        size="small"
                        color="secondary"
                        aria-label="add"
                        className={classes.margin}
                        onClick={redirectResume}>
                    <IconButton>
                        <WorkOutlineIcon  style={{ color: grey[50] }} />
                        </IconButton>
                    </Fab>
                    <Fab 
                        size="small"
                        color="secondary"
                        aria-label="add"
                        className={classes.margin}
                        href="https://github.com/BreadBooks"
                        target="_blank">
                    <IconButton>
                        <GitHubIcon  style={{ color: grey[50] }} />
                        </IconButton>
                    </Fab>
                    <Fab 
                        size="small"
                        color="secondary"
                        aria-label="add"
                        className={classes.margin}
                        href="https://www.linkedin.com/in/brett-b-breadbooks/"
                        target="_blank">
                    <IconButton>
                        <LinkedInIcon  style={{ color: grey[50] }} />
                        </IconButton>
                        </Fab>
                </Toolbar>
            </AppBar>
        </div>
    )
}