import React, { Component } from 'react'

 class Sample1 extends Component {
     constructor(props) {
         super(props)

         this.state={alert: 'yes'}
     }
     buttonHandler = () => {
         this.setState({alert: this.setState.alert })
     }
    render() {
        return (
            <div>
                <h1>{this.state.alert}</h1>
                <button onClick={this.buttonHandler}>click</button>

            </div>
        )
    }
}

export default Sample1;
