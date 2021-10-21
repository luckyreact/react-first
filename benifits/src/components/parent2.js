import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import RegularComponent from './RegularComponent'

class Parent2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name:''
        }
    }

    componentDidMount=()=>{
    setInterval(()=>{
            this.setState({
                name:'bunny'
            })
        },2000)
    }
    render() {
        return (
            <div>
                <h1>Parent component </h1>
                <MemoComponent name={this.state.name}/>
                <RegularComponent name={this.state.name}/>
            </div>
        )
    }
}

export default  Parent2;