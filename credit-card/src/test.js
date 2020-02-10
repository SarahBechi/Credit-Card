
import React, { Component } from 'react';
class test extends Component {
    
        constructor(props) {
          super(props);
          this.state = {
            
          };
        }


     

        
        render() {

console.log("val"+this.props.test)
          return (
            <div className="entries">
                <h1>ggg</h1>
                   <input className="secondInput"type='text'name="ghj" value={this.props.test} readOnly="1" />
            </div>
          );
        }
    }
 
export default test;
 