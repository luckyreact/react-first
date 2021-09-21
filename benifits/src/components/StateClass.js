import React, { Component } from "react";

class StateClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={place:'anakapalli',place2:'cdm'}
        

    }
    buttonHandler = () =>{
    this.setState({place:"vizag"})
    }
    buttonHandler2 = () =>{
    this.setState({place2:"vzm"})
    }
    render(){
        return(
            <div>
             <h1>my place name in class component is {this.state.place} </h1>
            <button onClick={this.buttonHandler}>submit</button>
            <h2>my place name in class component is {this.state.place2} </h2>
            <button onClick={this.buttonHandler2}>submit</button>
            </div>
        );
    };
};
export default StateClassComponent;