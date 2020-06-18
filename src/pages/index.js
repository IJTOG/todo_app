import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import pageRoutes from "../routes/pages";

function Index() {
  return (
    <Switch>
      {pageRoutes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
        else
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
      })}
    </Switch>
  );
}

export default Index;
