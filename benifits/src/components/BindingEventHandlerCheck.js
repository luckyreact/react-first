import React, { Component } from 'react'

class BindingEventHandlerCheck extends Component {
    constructor (props) {
        super(props) 

        this.state =  {buttonName : "yes"}
    }
    buttonHandler = () => {
        this.setState({buttonName: !this.state.buttonName})
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonHandler}>{this.state.buttonName ? "yes": "No"}</button>
            </div>
        )
    }
}

export default BindingEventHandlerCheck;