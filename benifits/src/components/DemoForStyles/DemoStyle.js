import React, { Component } from 'react'
import './DemoStyle.css'

class DemoStyle extends Component {
    render() {
        return (
            <div className="card">
                <h2 style={{backgroundColor:'blue',fontSize:'50px'}}>Name: bunny</h2>
                <h2 style={{backgroundColor:'red'}}>age: 25</h2>
                <h2 style={{backgroundColor:'green'}}>place: akp</h2>
                <h2 style={{backgroundColor:'pink'}}>technology: React</h2>
            </div>
        )
    }
}

export default DemoStyle
