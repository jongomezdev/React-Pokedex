import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Pokedex } from "./Pokedex";
import "./App.css";
import Pokemon from "./Pokemon";

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        <Pokedex />
      </Switch>
    </div>
  </Router>
);

export default App;
