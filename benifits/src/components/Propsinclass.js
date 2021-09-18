import React, {Component} from 'react';


class PropsInClass extends Component {
    render(){
        return(
            <h1>Hello {this.props.nameprop} I am class component</h1>
        );
    }
}

export default PropsInClass;