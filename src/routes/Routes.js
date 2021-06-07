import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//
import Header from "../layouts/Header/Header";
import Content from "../views/Content/Content";

//
import Entrar from "../views/Login/Entrar";
import Cadastro from "../views/Login/Cadastro";
import RecuperarSenha from "../views/Login/RecuperarSenha";
import CadastroPet from "../views/Pets/CadastroPet";
import MeusPets from "../views/Pets/MeusPets";
import { useStateValue } from "../providers/StateProvider";

function Routes() {
  const [{ user }] = useStateValue();

  return (
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

        <Route path="/recuperar-senha">
          <RecuperarSenha />
        </Route>

        <Route
          path="/cadastro-pet"
          render={() =>
            user ? (
              <div>
                <Header />

                <CadastroPet />
              </div>
            ) : (
              <Redirect
                to={{ pathname: "/entrar", state: { from: "/entrar" } }}
              />
            )
          }
        />

        <Route
          path="/meus-pets"
          render={() =>
            user ? (
              <div>
                <Header />

                <MeusPets />
              </div>
            ) : (
              <Redirect
                to={{ pathname: "/entrar", state: { from: "/entrar" } }}
              />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default Routes;
