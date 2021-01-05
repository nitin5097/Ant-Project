import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from "./screens/login/login";
import ThankYouResult from "./screens/result/result";
import Home from "./screens/home/home";
import CampaignStatus from "./screens/campaign status/campaign status";
import Reports from "./screens/reports/reports";
import CampaignDetail from "./screens/campaignDetail/campaignDetail";
import CampaignDesign from "./screens/campaignDesign/campaignDesign";
import Campaign from "./screens/campaign/campaign";
import Signup from "./screens/signup/signup";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CampaignStatus isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route exact path="/reports">
          <Reports isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/campaign">
            <Campaign isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/campaignDetail">
            <CampaignDetail isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/campaignDesign">
            <CampaignDesign isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/about">
            <div>About</div>
        </Route>
        <Route path="/result">
            <ThankYouResult isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/signup">
            <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
