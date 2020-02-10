import React, { Component } from "react";
import ehsMo9P from "./ehsMo9P.png";
class Card extends Component {
  render() {
    return (
      <div>
        <img className="img" src={ehsMo9P} alt="credit-card" />
        <p className="companyName">Company Name</p>
      </div>
    );
  }
}

export default Card;

/* export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          
          expiry={this.state.expiry}
          focus={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          ...
        </form>
      </div>
    );
  }
}*/
