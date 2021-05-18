import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Cmp, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("login-info") ? (
          <Cmp {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default Protected;
