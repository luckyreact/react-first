<<<<<<< HEAD
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
=======
import React, {Component} from 'react';

class GreetClass extends Component {
    render(){
        return(
        <h1>Hello {this.props.nameProp} I am class component</h1>
        );
    }
}

export default GreetClass;
>>>>>>> 3d0a4d0ecb556aa97f2949fee501e02be60ebce4
