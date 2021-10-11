import React, { Component } from 'react'
import './DemoApplications.css'

 class DemoApplication extends Component {
     constructor(props) {
         super(props)

         this.state = {
             userName:'',
             password:'',
             value:false
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
        if(this.state.userName.length >0 &&  this.state.password.length >0) {
            alert("Login success")
        } else {
            alert("please enter all fields");
        }
    }


    render() {
        return (
            <div className="parent">
                <input value={this.state.username} OnChange={this.userNameHandler} placeholder= "Enter username" className="username"/>
                <div>
                <input value={this.state.password}  type={this.state.value?'text':'password'} onChange={this.passwordHandler} placeholder= "enter password" className="password"/>
                <button onClick={this.HideHandler} className ='hide-button'>{this.state.value?'Hide':'Show'}</button>
                </div> 
                <button onClick={this.submitHandler} className="submit">login</button>
            </div>
        )
    }
}

export default DemoApplication;

