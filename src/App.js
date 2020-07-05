import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Route,
  Switch,
  Redirect
} from 'react-router';
import './App.css';
import Route01 from "./Route01";
import Route02 from "./Route02";

class App_ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect from="/" to="/page01" exact />
            <Route component={ Route01 } path="/page01" />
            <Route component={ Route02 } path="/page02" />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App_;
