import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/";
import SearchContainer from "./Components/SearchContainer/";
import Saved from "./Components/Saved/Saved";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
);

export default App;

