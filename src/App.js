import React, { Component } from "react";

// import './css/style.css';
import { Switch, Route } from "react-router-dom";

// Component
import Header from "./component/header"; // {/*  Header.js file run  */}

import Dashbord from "./component/pages/Dashbord";
import Profile from "./component/pages/Profile";
import Gallery from "./component/pages/Gallery";
import Slider from "./component/pages/Slider";
import Login from "./component/pages/Login";
import Footer from "./component/footer";

class App extends Component {
  render() {
    console.log("props", window.location.pathname);
    return (
      <div className="App">
        { window.location.pathname !== "/login" ? <Header /> : null }
        <Switch>
          <Route path="/" exact component={Dashbord} />
          <Route path="/dashbord" component={Dashbord} />
          <Route path="/profile" component={Profile} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/slider" component={Slider} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
