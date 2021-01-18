import AppBar from '../components/MaterialAppBar';
import '../index.css'
import { grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
        backgroundColor: '#00b8d4',
        
    },
    
  }));
function Welcome() {
    const classes = useStyles();

    return (
        <Fade in>
            
        <Grid container component="main" className={classes.root}>
            <AppBar />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                        <br></br>
                        
                        <Avatar className={classes.avatar}>
                            <FavoriteBorderIcon style={{  textShadow: '1px 3px 5px black', }}/>
        </Avatar>
                    <Typography variant="h3" style={{ color: grey[50], textShadow: '1px 3px 5px black', }}>
                    Welcome to my portfolio
         </Typography>
         
          
    
        </div>
      </Grid>
    </Grid>
    </Fade>
  );
}


export default Welcome;