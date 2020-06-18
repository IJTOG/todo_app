import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import appRoutes from "./routes/app";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {appRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
