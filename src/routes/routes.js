import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};
