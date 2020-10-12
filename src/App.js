import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import "./Scss/Styles.scss";
import "./Scss/Keyframes.scss";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}
