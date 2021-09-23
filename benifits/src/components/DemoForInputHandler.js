import React, { Component } from 'react'

class DemoForInputHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:''
        }
    }
    usernameHandler =(e) => {
        this.setState({username:e.target.value})
    }
    passwordHandler =(e) => {
        this.setState({password:e.target.value})
    }
    buttonHandler = () => {
        const {username,password} = this.state;
        if(username === password){
            alert("Login Success")
        } else {
            alert("login Failed");
        }
    }
    
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={{margin:'20px'}} placeholder="username" onChange={this.usernameHandler} value={this.state.username}></input>
                <input style={{margin:'20px'}} type='password' placeholder="password    " onChange={this.passwordHandler} value={this.state.password}></input>
                <button style={{margin:'20px'}} onClick={this.buttonHandler}>Submit</button>
            </div>
        )
    }
}

export default DemoForInputHandler
