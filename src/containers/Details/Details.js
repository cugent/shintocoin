import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ledger: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:1337/getAllLedger/${this.props.match.params.id}`).then(response => {
      this.setState({ ledger: response.data });
    });
  }

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>Ledger Transaction Details</h1>
        <p>Detailed view of a transaction from the ledger.</p>
        <br />
        <p>Transaction #{this.props.match.params.id}</p>
        <p>
          {this.state.ledger.action} {this.state.ledger.amount} ShintoCoin{" "}
        </p>
      </div>
    );
  }
}

export default Details;
