import React, { Component } from "react";
import axios from "axios";

export default class CalculateMortgage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banks: [],
      name_chosen: "",
      initial_loan: "",
      down_payment: "",
      monthly_payments: "",
      result: null,
    };
  }
  componentDidMount() {
    axios
      .get("/banks")
      .then((res) => {
        if (res.data.data.banks) {
          this.setState({ banks: res.data.data.banks });
          this.setState({ name_chosen: res.data.data.banks[0].bank_name });
        } else {
          this.setState({ banks: [] });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  bankNames() {
    return this.state.banks.map(function (el, i) {
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
  onChangeMonthlyPayments(e) {
    this.setState({
      monthly_payments: e.target.value,
    });
  }
  calculateMortgage() {
    const allBanks = this.state.banks;
    const nameChosen = this.state.name_chosen;
    const bankChosen = allBanks.find((obj) => {
      return obj.bank_name === nameChosen;
    });

    if (
      !this.state.name_chosen.trim() ||
      !this.state.initial_loan.trim() ||
      !this.state.monthly_payments.trim()
    ) {
      alert("Make sure that all fields are filled");
    }
    let P = parseInt(this.state.initial_loan);
    let r = (bankChosen.interest_rate) / 100;
    let n = parseInt(this.state.monthly_payments);

    let calculatedMortgage =
      (P * (r / 12) * Math.pow(1 + r / 12, n)) / (Math.pow(1 + r / 12, n) - 1);

    this.setState({
      result: calculatedMortgage,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Calculate Mortgage</h3>
        <div>
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
              type="number"
              min="500"
              step="100"
              className="form-control"
              value={this.state.initial_loan}
              onChange={this.onChangeInitialLoan.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Down Payment: </label>
            <input
              type="number"
              min="50"
              className="form-control"
              value={this.state.down_payment}
              onChange={this.onChangeDownPayment.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Number of monthly payments: </label>
            <input
              type="number"
              min="2"

              className="form-control"
              value={this.state.monthly_payments}
              onChange={this.onChangeMonthlyPayments.bind(this)}
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
              Your monthly mortgage is: {this.state.result.toFixed(2)}$
            </div>
          )}
        </div>
      </div>
    );
  }
}
