import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import PortraitIcon from '@material-ui/icons/Portrait';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "darkgray",
    },
    title: {
        flexGrow: 1,
        
    },
    
}));

function redirectHome(){
    window.location.replace("/");
}

function redirectProjects(){
    window.location.replace("/Projects");
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
                    <IconButton>
                        <PortraitIcon onClick={redirectProjects} fontSize="large" style={{ color: grey[50] }}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}