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
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import budgetpreview from '../images/budgetpreview.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '15px',
    margin: '5px',
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
        subheader="UT Austin Coding Bootcamp"
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
        <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/BudgetTracker" target="_blank"> 
          <FavoriteIcon />
        </IconButton>
      </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        title="Budget Tracker"
        subheader="UT Austin Coding Bootcamp"
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
        <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/BudgetTracker" target="_blank"> 
          <FavoriteIcon />
        </IconButton>
      </CardActions>
        </Card>
        </Grid>
        <Grid item xs={6}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        title="Budget Tracker"
        subheader="UT Austin Coding Bootcamp"
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
        <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/BudgetTracker" target="_blank"> 
          <FavoriteIcon />
        </IconButton>
      </CardActions>
            </Card>
        </Grid>
        <Grid item xs={6}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            1
          </Avatar>
        }
        title="Budget Tracker"
        subheader="UT Austin Coding Bootcamp"
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
        <IconButton aria-label="add to favorites" href="https://github.com/BreadBooks/BudgetTracker" target="_blank"> 
          <FavoriteIcon />
        </IconButton>
      </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </div>
  );
}
