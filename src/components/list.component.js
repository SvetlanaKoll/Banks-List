import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Bank extends Component {
  // constructor(props) {
  //   super(props);

  // }
  deleteBank() {
    axios
      .delete("/banks/" + this.props.bank._id)
      .then((res) => {
        console.log("Bank is successfully deleted!");
      })
      .catch((err) => {
        console.log(err);
      });

  }
  render() {
    return (
      <tr>
        <td>{this.props.bank.bank_name}</td>
        <td>{this.props.bank.interest_rate}%</td>
        <td>{this.props.bank.maximum_loan}</td>
        <td>{this.props.bank.maximum_down_payment}%</td>
        <td>
          <button type="button" className="btn btn-info">
            <Link style={{ color: "#44014C", textDecoration: "none" }} to={"/edit/" + this.props.bank._id}>
              Edit Bank
          </Link>
          </button>
        </td>
        <td>
          <button onClick={this.deleteBank.bind(this)} type="button" className="btn btn-danger">
            Delete Bank
        </button>
        </td>
      </tr>
    )
  }

}

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { banks: [] };
  }
  componentDidMount() {
    axios
      .get("/banks")
      .then((res) => {
        if (res.data.data.banks) {
          this.setState({ banks: res.data.data.banks });
        } else {
          this.setState({ banks: [] });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  componentDidUpdate() {
    axios
      .get("/banks")
      .then((res) => {
        this.setState({ banks: res.data.data.banks });
      })
      .catch(function (err) {
        console.log(err);
      });
  }


  bankList() {
    return this.state.banks.map(function (el, i) {
      return <Bank bank={el} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Banks List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Interest Rate</th>
              <th>Maximum Loan</th>
              <th>Maximum Down Payment</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.bankList()}</tbody>
        </table>
      </div>
    );
  }
}
