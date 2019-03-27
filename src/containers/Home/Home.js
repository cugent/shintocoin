import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>ShintoCoin</h1>
        <p>Welcome to ShintoCoins, ShintoCoins are coins made by solving algorithms! To get started head over to Mine Coins' and get to work!</p>
      </div>
    );
  }
}

export default Home;
