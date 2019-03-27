import React, { Component } from "react";
import axios from "axios";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      coins: 0,
      amountToBuy: ""
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
  updateAmount = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  buyCoins = () => {
    if (parseInt(this.state.amountToBuy) > 0 && parseInt(this.state.amountToBuy)) {
      let value = this.state.value;
      let initialValue = this.state.value;
      let coins = this.state.coins;
      coins += parseInt(this.state.amountToBuy);
      value += 0.1 * parseInt(this.state.amountToBuy);
      this.setState({ coins, value }, () => {
        this.createTransaction("Buy", parseInt(this.state.amountToBuy), initialValue);
        this.updateStatistics(value, coins);
      });
    }
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
        <h1>Buy ShintoCoins</h1>
        <p>Current ShintoCoin Value: ${parseFloat(this.state.value).toFixed(2)}</p>
        <p>Number of ShintoCoins Owned: {this.state.coins}</p>
        <div className="input-group mb-3" style={{ width: "300px" }}>
          <input
            onChange={this.updateAmount}
            type="number"
            id="amountToBuy"
            className="form-control"
            placeholder="Amount to purchase"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button onClick={this.buyCoins} className="btn btn-outline-secondary" type="button" id="button-addon2">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
