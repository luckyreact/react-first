import React, { Component } from "react";

class GreetClass extends Component {
    render() {
        return(

          <div>
           <h1>this is {this.props.nameprop} class components </h1>
          </div>
    );
  };
}
export default GreetClass;