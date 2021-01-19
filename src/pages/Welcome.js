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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


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
    backgroundColor: 'rgb(0, 173, 196)',

  },
  breadcrumbs: {
    marginTop: "5px"
  }

}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

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
              <FavoriteBorderIcon style={{ color: grey[700], }} />
            </Avatar>
            <Typography variant="h3" style={{ color: grey[700],  }}>
              Welcome to my portfolio
         </Typography>
            <br></br>
            <Typography variant="h6" style={{ color: grey[600], textAlign: "center", }}>Hi I'm Brett! I'm a twenty-one year old majoring in Software Engineering at the University of Texas at Arlington. I recentely graduated from the UT Austin Coding Bootcamp where I learned full stack web development.  Besides coding, I love cats, computers, video games, and graphic design.</Typography>
            <br></br>
            <Typography variant="h4" style={{ color: grey[700], textAlign: "center", marginTop: "50%" }}> You can find my projects, portfolio, resume, and linkedin down below.
         </Typography>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link color="inherit" href="./Projects">
                Projects
  </Link>
              <Link color="inherit" href="https://github.com/BreadBooks" target="_blank" >
                GitHub
  </Link>
              <Link color="inherit" href="./Resume" >
                Resume
  </Link>
  <Link color="inherit" href="https://www.linkedin.com/in/brett-b-breadbooks/" target="_blank" >
                Linkedin
  </Link>
            </Breadcrumbs>
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
}


export default Welcome;