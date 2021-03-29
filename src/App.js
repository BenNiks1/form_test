import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Info } from "./Pages/Info";
import { Payment } from "./Pages/Payment";

export const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
