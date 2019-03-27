import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home/Home";
import Mine from "./containers/Mine/Mine";
import Buy from "./containers/Buy/Buy";
import Sell from "./containers/Sell/Sell";
import Ledger from "./containers/Ledger/Ledger";
import Details from "./containers/Details/Details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/mine" component={Mine} />
            <Route path="/buy" component={Buy} />
            <Route path="/sell" component={Sell} />
            <Route path="/ledger" component={Ledger} />
            <Route path="/transaction/:id" component={Details} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
