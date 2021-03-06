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
import DetailsPet from "../views/DetailsPet/DetailsPet";
import NewSenha from "../views/Login/NewSenha";
import Perfil from "../views/Perfil/Perfil";

import PrivateRoute from "./PrivateRoute";
import PrivateRouteRelatorios from "./PrivateRouteRelatorios";
import Relatorio from "../views/Relatorios/Relatorio";

function Routes() {
  const [{ user }] = useStateValue();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />

          <Content />
        </Route>

        <PrivateRouteRelatorios path="/relatorios" component={Relatorio} />

        <PrivateRoute path="/perfil" component={Perfil} />

        <Route path="/pet/:petId">
          <DetailsPet />
        </Route>

        <Route path="/nova-senha">
          <NewSenha />
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
