import React, { Component } from 'react'
import './SetInterval.css';

class SetInterval extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             added:'',
        }
    }
    buttonHandler = () => {
        this.setState({added:"Product added to the cart successfully"})
        setInterval(()=>{
            this.setState({added:''})
          },3000)
    }
    
    render() {
        return (
            <div className="card">
            <h2 >Mobile: samsung</h2>
            <h2 >Model: m51</h2>
            <h2 >Ram: 8gb</h2>
            <h2 >battery: 7000mah</h2>
            <button onClick={this.buttonHandler}>Add to cart</button>
            <h3>{this.state.added}</h3>
        </div>
        )
    }
}

export default SetInterval;
