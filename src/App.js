import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import Login from "./login";
import createBrowserHistory from "history/createBrowserHistory";
import Dashboard from "./dashboard";
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
