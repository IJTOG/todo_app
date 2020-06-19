import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import pageRoutes from "../routes/pages";

import { removeToken } from "../lib/auth";

function Index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-light float-right mt-2"
            onClick={removeToken}
          >
            Logout
          </button>
        </div>
      </div>
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
    </div>
  );
}

export default Index;
