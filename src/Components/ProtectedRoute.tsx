import React from "react";
import { Route, Navigate } from "react-router-dom";
import _ from "lodash";

const ProtectedRoute = ({ render: Component, path, ...rest }: any): any => {
  const stringRoute: any = localStorage.getItem("localRoute");
  const comparisonRoutes = JSON.parse(stringRoute);
  const currentLocation = _.last(
    _.split(window.location.href, window.location.origin)
  );

  const isRestricted = _.find(comparisonRoutes, ["path", currentLocation]);

  return (
    <Route
      {...rest}
      render={(props: any) => {
        return localStorage.getItem("token") && isRestricted ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: "/" }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
