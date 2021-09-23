import React, { Component } from 'react'

class HandleInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputValue:''
        }
    }
    inputHandler = (e) => {
        this.setState({inputValue:e.target.value})
    }
    
    render() {
        return (
            <div>
                <input onChange={this.inputHandler} value={this.state.inputValue}></input>
                <h1>{this.state.inputValue}</h1>
            </div>
        )
    }
}

export default HandleInput
