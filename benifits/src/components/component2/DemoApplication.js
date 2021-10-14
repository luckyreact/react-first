import React, { Component } from "react";
class DemoApplication extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             password:'',
             value:false
             
        }
    }
    Usernamehandler = (e) => {
        this.setState({Username:e.target.value})
    }
    passwordhandler = (e) => {
        this.setState({password:e.target.value})
    }
     Hidehandler = () => {
         this.setState({value:!this.state.value})

     }
    submithandler = () => {
        if(this.state.Username.length > 0 && this.state.password.length > 0){
            alert('Signin Successfully')
        }else {
            alert("Please enter all fields")
        }
    }
    
    render() {
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                   < input value={this.state.Username} onChange={this.Usernamehandler} placeholder="Enter Username" style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'180px'}}/>
                   <div>
                   < input value={this.state.password} type={this.state.value?'password':'text'} onChange={this.passwordhandler} placeholder="Enter Password"style={{margin:'10px',padding:'10px',borderRadius:'5px',width:'180px'}}/>
            <button onClick={this.Hidehandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'50px', backgroundColor:'purple', color:"white"}}>Show</button>
            
            </div>
            <button onClick={this.submithandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'180px', backgroundColor:'black', color:"white"}} >Signin</button>
            </div>
        )
    }
}

export default DemoApplication;