import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main"



function App() {

  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/main" exact component={Main}><Main /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;