import React, { Component } from "react";
import axios from "axios";

export default class EditItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeBankName = this.onChangeBankName.bind(this);
        this.onChangeInterestRate = this.onChangeInterestRate.bind(this);
        this.onChangeMaximumLoan = this.onChangeMaximumLoan.bind(this);
        this.onChangeMaximumDownPayment = this.onChangeMaximumDownPayment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bank_name: "",
      interest_rate: "",
      maximum_loan: "",
      maximum_down_payment: "",
    };
  }
  componentDidMount() {
    
    axios
      .get("http://localhost:4000/banks/" + this.props.match.params.id)
      .then((res) => {
       
        this.setState({
          bank_name: res.data.data.bank.bank_name,
          interest_rate: res.data.data.bank.interest_rate,
          maximum_loan: res.data.data.bank.maximum_loan,
          maximum_down_payment: res.data.data.bank.maximum_down_payment,
        });
        
      })
      .catch(function (error) {
        console.log(error);
      });

      
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
    console.log(this.state)
    const obj = {
        bank_name: this.state.bank_name,
        interest_rate: this.state.interest_rate,
        maximum_loan: this.state.maximum_loan,
        maximum_down_payment: this.state.maximum_down_payment
    };
    console.log(obj);
    axios.patch('http://localhost:4000/banks/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/');
}
  render() {
    return (
      <div>
        <h3 align="center">Edit Bank</h3>
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
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Bank"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
