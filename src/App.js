import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';







function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
