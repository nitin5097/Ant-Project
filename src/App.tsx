import React from 'react';
import './App.css';
import {Route, Switch, } from "react-router-dom";
import Login from "./screens/login/login";
import ThankYouResult from "./screens/result/result";
import Home from "./screens/home/home";
import CampaignStatus from "./screens/campaign status/campaign status";
import Reports from "./screens/reports/reports";
import CampaignDetail from "./screens/campaignDetail/campaignDetail";
import Analyze from "./screens/analyze/analyze";
import Campaign from "./screens/campaign/campaign";
import Signup from "./screens/signup/signup";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Login/>
        </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/dashboard">
          <CampaignStatus isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route exact path="/reports">
          <Reports isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route path="/campaign">
            <Campaign isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route path="/campaignDetail">
            <CampaignDetail isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route path="/analyze">
            <Analyze isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route path="/about">
            <div>About</div>
        </Route>
        <Route path="/result">
            <ThankYouResult isLoggedIn={true} message={"Welcome"} name={"Admin"}/>
        </Route>
        <Route path="/signup">
            <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
