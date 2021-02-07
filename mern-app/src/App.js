import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/list.component";
import EditItem from "./components/editItem.component";
import CreateItem from "./components/createItem.component";
import CalculateMortgage from "./components/calculateMortgage.component";
import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://google.com" target="_blank">
            <img src={logo} width="30" height="30" alt="google.com" />
          </a>
          <Link to="/" className="navbar-brand">Bank Management Page</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Banks</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Bank</Link>
              </li>
              <li className="navbar-item">
                <Link to="/calculate" className="nav-link">Calculate Mortgage</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/calculate" component={CalculateMortgage} />
        <Route path="/create" component={CreateItem} />
      </div>
    </Router>
    );
  }
}

export default App;
