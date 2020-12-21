import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from "./screens/login/login";
import Home from "./screens/home/home";
import CampaignDetail from "./screens/campaignDetail/campaignDetail";
import Campaign from "./screens/campaign/campaign";
import Signup from "./screens/signup/signup";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/campaign">
            <Campaign isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/campaignDetail">
            <CampaignDetail isLoggedIn={true} message={"Welcome"} name={"Nitin"}/>
        </Route>
        <Route path="/about">
            <div>About</div>
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
