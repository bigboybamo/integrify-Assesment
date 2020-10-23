import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import FetchUser2 from "./components/FetchUser2";
import About from "./components/About";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users/:id" component={About} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
