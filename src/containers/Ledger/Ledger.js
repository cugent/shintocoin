import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Ledger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ledger: []
    };
  }
  componentDidMount() {
    this.getUpdatedLedger();
  }

  getUpdatedLedger = () => {
    axios.get("http://localhost:1337/getAllLedger").then(response => {
      this.setState({ ledger: response.data });
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>Browse the Ledger</h1>
        <p>Here you can browse all ShintoCoin transactions</p>
        <table className="table table-hover" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Action</th>
              <th>Amount</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ledger
              ? this.state.ledger.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.action}</td>
                      <td>{item.amount}</td>
                      <td>{item.value}</td>
                      <td>
                        <button type="button" className="btn btn-outline-secondary">
                          <Link to={`/transaction/${item.id}`}>Details</Link>
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ledger;
