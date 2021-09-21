import React, { Component } from 'react'

export class Destructing extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hero: "prabas",
            movie: 'bahubali'
        }
    }
    render() {
        console.log(this.props)
        const {name,place,age} = this.props
        const {hero} = this.state
        return (
            <div>
                <h1>Destructing class</h1>
                <h1>Name : {name}</h1>
                <h1>Place : {place}</h1>
                <h1>age : {age}</h1>
                <h1>hero : {hero}</h1>
            
            </div>
        )
    }
}

export default Destructing;

