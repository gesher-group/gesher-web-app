import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Compoonent Imports
import HomePage from "../components/HomePage/HomePage";
import ServicesPage from "../components/ServicesPage/ServicesPage.js";
import TeamsPage from "../components/TeamsPage/TeamsPage.js";
import PartnerPage from "../components/PartnerPage/PartnerPage.js";
import JoinPage from "../components/JoinPage/JoinPage.js";
import ContactPage from "../components/ContactPage/ContactPage.js";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/teams" exact component={TeamsPage} />
        <Route path="/partner" exact component={PartnerPage} />
        <Route path="/join" exact component={JoinPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
};
