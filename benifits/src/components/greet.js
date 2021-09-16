import React, { Component } from "react";

class Greet extends Component {
    render() {
        let name = "sateesh variable"
        
        return(
          <div>
           <h1>this is {name} class components </h1>
          </div>
    );
  };
}
export default Greet;