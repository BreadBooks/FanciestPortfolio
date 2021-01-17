import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard"



function App() {

  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/dashboard" exact component={Dashboard}><Dashboard /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;