import React, { Component } from 'react'
import Hoc from './Hoc'

class Component1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:0
        }
    }
    
    buttonHandler = () => {
        this.setState({value:this.state.value+1})
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonHandler}>{this.props.name} Clicked {this.state.value} times </button>
            </div>
        )
    }
}

export default Hoc(Component1);
