import React, { Component } from 'react'
import Hoc from './Hoc';

class Component2 extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.hover}>{this.props.name} Hover {this.props.value} times</h1>
            </div>
        )
    }
}

export default Hoc(Component2);
