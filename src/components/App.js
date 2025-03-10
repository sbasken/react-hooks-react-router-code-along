import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Messages from "./Messages";

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
            <Route path="/about">
            <About />
            </Route>
            <Route path="/login">
            <Login />
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/signup">
            <Signup />
            </Route>
            <Route path="/messages">
            <Messages />
            </Route>
         </Switch>
      </div>
    )
  }

export default App