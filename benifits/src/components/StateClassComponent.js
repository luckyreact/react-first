import React, { Component } from 'react'

class StateClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={place:'anakapalli'}
    }
    buttonHandler = () => {
     this.setState({place:'vizag'})
    }

    componentWillUnmount = () => {
        console.log("inside component will unMount")
    }
    render() {
        return (
            <div>
              <h1>  My place name is {this.state.place}.</h1>
              <button onClick={this.buttonHandler}>submit</button>
            </div>
        )
    }
}

export default StateClassComponent
