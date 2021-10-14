import React, { Component } from 'react'
import './DemoApplication.css'

class DemoApplication extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             password:'',
            value:false,
            userNameError:''
        }
    }
    userNameHandler = (e) => {
     this.setState({userName:e.target.value})
    }

    passwordHandler = (e) => {
     this.setState({password:e.target.value})

    }
    HideHandler = () => {
      this.setState({value:!this.state.value})
    }
    
    submitHandler = () => {
        if(this.state.userName.length == 0){
            this.setState({userNameError:"Please enter the username"})
        }
        if(this.state.userName.length > 0 &&  this.state.password.length >0){
            alert('Login sucess')
        }
    }
    
    render() {
        return (
            <div className="parent">
                <input value={this.state.userName} onChange={this.userNameHandler} placeholder="Enter Username" className="username"/>
                <p style={{color:'red'}}>{this.state.userNameError}</p>
                <div>
                    <input value={this.state.password} type={this.state.value?'text':'password'} onChange={this.passwordHandler} placeholder="Enter Password" className="password"/>
                    <button onClick={this.HideHandler} className ='hide-button'>{this.state.value?'Hide':'Show'}</button>
                </div>
                <button onClick={this.submitHandler} className='submit-button'>Login</button>    
            </div>
        )
    }
}

export default DemoApplication
