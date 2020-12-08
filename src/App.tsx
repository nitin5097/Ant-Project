import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from "./screens/login/login";
import Home from "./screens/home/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={true} message={"Hello Home"} name={"Nitin"}/>
        </Route>
        <Route path="/about">
            <div>About</div>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
