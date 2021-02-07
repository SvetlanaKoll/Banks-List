import React, { Component } from "react";
import axios from "axios";

export default class CalculateMortgage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bank_names: [],
      name_chosen: "",
      interest_rate: "",
      initial_loan: "",
      down_payment: "",
      result: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/banks")
      .then((res) => {
        if (res.data.data.banks) {
          this.setState({ bank_names: res.data.data.banks });
        } else {
          this.setState({ bank_names: [] });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  bankNames() {
    return this.state.bank_names.map(function (el, i) {
      return <option>{el.bank_name}</option>;
    });
  }
  onChangeBankName(e) {
    this.setState({
      name_chosen: e.target.value,
    });
  }

  onChangeInitialLoan(e) {
    this.setState({
      initial_loan: e.target.value,
    });
  }

  onChangeDownPayment(e) {
    this.setState({
      down_payment: e.target.value,
    });
  }
  calculateMortgage() {
    this.setState({
      result: 123,
    });
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Calculate Mortgage</h3>
        <div >
          <div className="form-group">
            <label for="name">Select Name</label>
            <select
              onChange={this.onChangeBankName.bind(this)}
              className="form-control"
              id="name"
            >
              {this.bankNames()}
            </select>
          </div>
          <div className="form-group">
            <label>Initial Loan: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.initial_loan}
              onChange={this.onChangeInitialLoan}
            />
          </div>
          <div className="form-group">
            <label>Down Payment: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.down_payment}
              onChange={this.onChangeDownPayment}
            />
          </div>

          <div className="form-group">
            <button
              onClick={this.calculateMortgage.bind(this)}
              className="btn btn-primary"
            >
              Calculate!
            </button>
          </div>
        </div>

        <div class="card">
          {this.state.result && (
            <div class="card-body">
              Your monthly mortgage is: {this.state.result}
            </div>
          )}
        </div>
      </div>
    );
  }
}
