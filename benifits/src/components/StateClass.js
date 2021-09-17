import React, { Component } from "react";

class StateClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={place:'anakapalli'}
    }
    buttonHandler = () =>{
    this.setState({place:"vizag"})
    }
    render(){
        return(
            <div>
             <h1>my place name in class component is {this.state.place} </h1>
            <button onClick={this.buttonHandler}>submit</button>
            </div>
        );
    };
};
export default StateClassComponent;