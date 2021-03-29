import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Info } from "./Pages/Info";
import { Payment } from "./Pages/Payment";
import { Result } from "./Pages/Result";

export const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/payment" component={Payment} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
