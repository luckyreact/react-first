import React, {Component} from "react";

class GreetClass extends Component {
    render() {
        const name= "Lucky variable"
        return(
            <div>
                <h1>This is {name} class components</h1>
                </div>
        )
    }
} 
export default GreetClass