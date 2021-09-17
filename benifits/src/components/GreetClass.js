import React, {Component} from 'react';

class GreetClass extends Component {
    render(){
        return(
        <h1>Hello {this.props.nameProp} I am class component</h1>
        );
    }
}

export default GreetClass;