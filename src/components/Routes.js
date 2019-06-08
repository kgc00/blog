import React, { Component } from "react";
import Feed from "../pages/Feed";
import Post from "../pages/Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Feed} />
        <Route path="/post" component={Post} />
      </Router>
    );
  }
}

export default Routes;
