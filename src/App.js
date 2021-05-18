import React from "react";

//
import Entrar from "./views/Login/Entrar";
import Cadastro from "./views/Login/Cadastro";

//
import Header from "./layouts/Header/Header";
import Content from "./views/Content/Content";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />

            <Content />
          </Route>

          <Route path="/entrar">
            <Entrar />
          </Route>

          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
