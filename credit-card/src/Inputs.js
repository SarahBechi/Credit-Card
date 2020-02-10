import React, { Component } from "react";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  myChangeHandler = event => {
    let num = /^\s*-?[0-9]{1,16}\s*$/;
    let nam = event.target.name;
    let val = event.target.value;
    let nuM = /^[0-9\b]+$/;

    if (nam === "username" && event.target.value.length < 20) {
      this.setState({ [event.target.name]: event.target.value.toUpperCase() });
    }

    if (nam === "number" && event.target.value.match(num)) {
      this.setState({ [nam]: val });
    }

    if (nam === "date") {
      if (event.target.value.length === 2) {
        event.target.value = event.target.value + "/";
      }

      if (
        event.target.value.substring(0, 2) >= 1 &&
        event.target.value.substring(0, 2) <= 12 &&
        event.target.value.substring(3, 5).match(nuM)
      ) {
        // if(condition sur MM entre 1 and 12 && MM && YY==> Number)

        this.setState({ [nam]: val });
      } else {
        this.setState({ [nam]: " " });
      }
    }
  };

  render() {
    return (
      <div className="entries">
        <h1 className="enterName"> {this.state.username}</h1>
        <h1 className="enterNumber">{this.state.number} </h1>
        <h1 className="enterDate">{this.state.date}</h1>

        <p>Name</p>
        <input
          className="firstInput"
          type="text"
          name="username"
          onChange={this.myChangeHandler}
          maxLength={20}
        />
        <p>Credit Card Number</p>
        <input
          className="secondInput"
          type="text"
          name="number"
          onChange={this.myChangeHandler}
          maxLength={16}
        />
        <p>Expiration Date</p>
        <input
          className="secondInput"
          type="text"
          name="date"
          onChange={this.myChangeHandler}
          maxLength={5}
        />
      </div>
    );
  }
}

export default Inputs;

// ^[A-Z]{1,20}$                                           Maximum 20 characters
// .toUpperCase()                                          To Upper Case
// For MM-YY ==> var dateReg = /^\d{2}[./-]\d{2}$/         Format
//  ^\s*-?[0-9]\s*$                                  Maximum of 16 numbers
