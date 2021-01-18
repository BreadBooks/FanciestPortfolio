import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Projects';
import Welcome from './pages/Welcome'
import './index.css';



function App() {

  return (
<Router>
      <div >
        <Switch>
          <Route path="/" exact component={Welcome}><Welcome /></Route>
          <Route path="/Projects" exact component={Main}><Main /></Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;