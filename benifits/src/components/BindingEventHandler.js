import React, { Component } from 'react'

class BindingEventHandler extends Component {
    constructor (props) {
        super(props) 

        this.state = {
            buttonName : "yes"
        }
        this.onSubmit = this.onSubmit.bind(this)
       
    }
        onSubmit () {
            this.setState({buttonName: "No"})
        }
    render() {
        return (
            <div>
                <button onClick={this.onSubmit}>{this.state.buttonName}</button>
            </div>
        )
    }
}

export default BindingEventHandler;