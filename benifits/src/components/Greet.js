import React, {Component} from 'react';

class Greet extends Component {
    render(){
        let name = 'bunny variable';
        return(
        <h1>Hello {name} I am class component</h1>
        );
    }
}

export default Greet;