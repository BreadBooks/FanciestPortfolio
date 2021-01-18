import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography , ListItem, Container, createMuiTheme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import budgetpreview from '../images/budgetpreview.png';
import legalpreview from '../images/legalpreview.png';
import covidtrackpreview from '../images/covidtrackpreview.png';
import teamgenpreview from '../images/teamgenpreview.png';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '15px',
    margin: '5px',
    fontFamily: 'Yusei Magic, sans-serif',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
    textCenter: {
      textAlign: "center"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[100],
  },
  
}));


export default function MainContainer() {
  const classes = useStyles();

  return (
     <Fade in>
    <div className={classes.root}>
      <br></br>
      <Grid container spacing={24} fixed className={classes.root}>
          <Grid item xs={6}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        title="Budget Tracker"
        subheader="UT Austin Coding Bootcamp - Homework 18"
      />
      <CardMedia
        className={classes.media}
        image={budgetpreview}
        title="Budget Tracker"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Budget Tracker 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href="https://agile-plateau-50526.herokuapp.com/" target="_blank"> 
          <DesktopMacIcon />
              </IconButton>
              <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/BudgetTracker" target="_blank"> 
          <GitHubIcon />
        </IconButton>
      </CardActions>
            </Card>
          </Grid>
            
            <Grid item xs={6}>
              
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            2
          </Avatar>
        }
        title="Legal Formulator"
        subheader="UT Austin Coding Bootcamp - Project 3"
      />
      <CardMedia
        className={classes.media}
        image={legalpreview}
        title="Budget Tracker"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Legal Formulator 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href="https://legal-formulator.herokuapp.com/" target="_blank"> 
          <DesktopMacIcon />
              </IconButton>
              <IconButton aria-label="add to favorites" href="https://github.com/SCastanedaMunoz/Project-3" target="_blank"> 
          <GitHubIcon />
        </IconButton>
      </CardActions>
        </Card>
        </Grid>
        <Grid item xs={6}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            3
          </Avatar>
        }
        title="COVID-19 Tracker"
        subheader="UT Austin Coding Bootcamp - Project 2"
      />
      <CardMedia
        className={classes.media}
        image={covidtrackpreview}
        title="COVID19 Tracker"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          COVID-19 Tracker
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href="https://tuxedoed-turtles-project-2.herokuapp.com/" target="_blank"> 
          <DesktopMacIcon />
              </IconButton>
              <IconButton aria-label="add to favorites" href="https://github.com/SCastanedaMunoz/Project-2" target="_blank"> 
          <GitHubIcon />
        </IconButton>
      </CardActions>
            </Card>
        </Grid>
        <Grid item xs={6}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        title="Team Profile Generator"
        subheader="UT Austin Coding Bootcamp - Homework 10"
      />
      <CardMedia
        className={classes.media}
        image={teamgenpreview}
        title="Team Profile Generator"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Team Profile Generator
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/TeamProfileGen" target="_blank"> 
          <GitHubIcon />
        </IconButton>
      </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </div>
      </Fade>
  );
}
