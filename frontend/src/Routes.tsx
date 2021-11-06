import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/dashboard" component={Dashboard}/>
    </BrowserRouter>
  );
};

export default Routes;
