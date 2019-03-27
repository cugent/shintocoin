import React, { Component } from "react";
import axios from "axios";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: "",
      coins: 0,
      value: 0
    };
  }
  componentDidMount() {
    this.getStatisticValues();
  }

  getStatisticValues = () => {
    axios.get("http://localhost:1337/getCurrentStatistics").then(response => {
      this.setState({ value: response.data.value, coins: response.data.amount });
    });
  };

  updateGuess = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  mineCoins = () => {
    let random = Math.floor(Math.random() * 101);
    let coins = this.state.coins;
    let amountMined = 0;
    console.log(random);
    if (random < parseInt(this.state.guess)) {
      coins++;
      amountMined = 1;
    } else if (random === parseInt(this.state.guess)) {
      coins += 2;
      amountMined = 2;
    } else {
      console.log("Get Owned");
      amountMined = 0;
    }

    this.setState({ coins }, () => {
      this.createTransaction("Mined", amountMined, this.state.value);
      this.updateStatistics(this.state.value, this.state.coins);
    });
  };

  createTransaction = (action, amount, value) => {
    let object = {
      action: action,
      amount: amount,
      value: value
    };
    axios.post("http://localhost:1337/postLedger", object).then(response => {
      console.log(response);
    });
  };

  updateStatistics = (value, coins) => {
    let object = {
      amount: coins,
      value: value
    };

    axios.put("http://localhost:1337/updateCurrentStatistics", object).then(response => {
      console.log(response);
      this.getStatisticValues();
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>Mine ShintoCoins</h1>
        <p>Here you can mine ShintoCoins</p>
        <div className="input-group mb-3" style={{ width: "300px" }}>
          <input onChange={this.updateGuess} type="number" id="guess" className="form-control" placeholder="Please Enter Number" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button onClick={this.mineCoins} className="btn btn-outline-secondary" type="button" id="button-addon2">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mine;
