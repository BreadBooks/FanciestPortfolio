import "./App.css";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Main from './pages/Projects';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import './index.css';



function App() {

  return (
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
  );
}

export default App;