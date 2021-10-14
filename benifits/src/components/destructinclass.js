import React, { Component } from 'react'

class Destructing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movie:"bahubali",
             hero:'prabas',
             heroin:'anuska'
        }
    }
    
    render() {
        console.log(this.props)
    //    const obj =  {name:”bunny”,place:”akp,”age”:25}
     //   const {place} = obj;
        const {name,place,age}  = this.props
        const {movie} = this.state
        return (
    
 <div>
                <h1>Name : {name}</h1>
                <h1>Place : {place}</h1>
                <h1>age : {age}</h1>
                <h1>movie : {movie}</h1>
            </div>
        )
    }
}

export default Destructing