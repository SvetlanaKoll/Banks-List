import React, { Component } from "react";
import axios from "axios";

export default class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeBankName = this.onChangeBankName.bind(this);
    this.onChangeInterestRate = this.onChangeInterestRate.bind(this);
    this.onChangeMaximumLoan = this.onChangeMaximumLoan.bind(this);
    this.onChangeMaximumDownPayment = this.onChangeMaximumDownPayment.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bank_name: "",
      interest_rate: "",
      maximum_loan: "",
      maximum_down_payment: "",
    };
  }
  onChangeBankName(e) {
    this.setState({
      bank_name: e.target.value,
    });
  }

  onChangeInterestRate(e) {
    this.setState({
      interest_rate: e.target.value,
    });
  }

  onChangeMaximumLoan(e) {
    this.setState({
      maximum_loan: e.target.value,
    });
  }
  onChangeMaximumDownPayment(e) {
    this.setState({
      maximum_down_payment: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const newBank = {
      bank_name: this.state.bank_name,
      interest_rate: this.state.interest_rate,
      maximum_loan: this.state.maximum_loan,
      maximum_down_payment: this.state.maximum_down_payment,
    };
    let isError = false;
    if (
      !newBank.bank_name.trim() ||
      !newBank.interest_rate.trim() ||
      !newBank.maximum_loan.trim() ||
      !newBank.maximum_down_payment.trim()
    ) {
      isError = true;
    }
    if (
      newBank.bank_name  ||
      !newBank.interest_rate.trim() ||
      !newBank.maximum_loan.trim() ||
      !newBank.maximum_down_payment.trim()
    ) {
      isError = true;
    }
    if(isError){
    alert('Make sure you have entered all the data!')
    } else{
      axios
        .post("http://localhost:4000/banks", newBank)
        .then((res) => console.log(res.data));
  
      this.setState({
        bank_name: "",
        interest_rate: "",
        maximum_loan: "",
        maximum_down_payment: "",
      });

    }
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Bank</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Bank Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.bank_name}
              onChange={this.onChangeBankName}
            />
          </div>
          <div className="form-group">
            <label>Interest Rate: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.interest_rate}
              onChange={this.onChangeInterestRate}
            />
          </div>
          <div className="form-group">
            <label>Maximum loan: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.maximum_loan}
              onChange={this.onChangeMaximumLoan}
            />
          </div>
          <div className="form-group">
            <label>Maximum Down Payment: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.maximum_down_payment}
              onChange={this.onChangeMaximumDownPayment}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Bank"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
