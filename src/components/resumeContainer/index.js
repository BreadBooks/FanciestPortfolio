import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Resume from '../images/resume.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px"
    },
    image: {
        backgroundImage: 'url(https://images.pexels.com/photos/5417674/pexels-photo-5417674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

export default function ResumeContainer() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper, classes.image}>
                </div>
                <br></br>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Resume"
          height=""
          image={ Resume }
          title="Resume"
        />
      </CardActionArea>
    </Card>
        </Grid>
    </Grid >
        
    );
}