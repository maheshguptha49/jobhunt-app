import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../Home";
import { SingleJob } from "../SingleJob";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/jobs/:id">
          <SingleJob />
        </Route>
      </Switch>
    </>
  );
};
