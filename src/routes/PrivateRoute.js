import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../layouts/Header/Header";
import { useStateValue } from "../providers/StateProvider";

function PrivateRoute({ component: Component, ...rest }) {
  const [{ user }] = useStateValue();

  return (
    <div>
      <Header />
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/entrar", state: { from: props.location } }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;
