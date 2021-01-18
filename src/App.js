import "./App.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Main from './pages/Projects';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
<Router>
      <div >
        <Switch>
          <Route path="/" exact={true} component={Welcome}>
            <Welcome />
          </Route>

          <Route path="/Projects" exact={true} component={Main}>
            <Main />
          </Route>
         
          <Route path="/Resume" exact={true} component={Resume}>
            <Resume />
          </Route>
         
        </Switch>
      </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;