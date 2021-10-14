import React, { Component } from "react";
class SignupApplication extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             password:'',
             email:'',
             value:false,
             UsernameError:'',
             passwordError:'',
             emailError:''
             
        }
    }
    Usernamehandler = (e) => {
        this.setState({Username:e.target.value})
    }
    passwordhandler = (e) => {
        this.setState({password:e.target.value})
    }
    emailhandler = (e) => {
        this.setState({email:e.target.value})
    }
     Hidehandler = () => {
         this.setState({value:!this.state.value})

     }
    submithandler = () => {
       
       if(this.state.Username.length==0) {
        this.setState({UsernameError:'Please enter the username'})

       }
       if(this.state.password.length==0){
           this.setState({passwordError:'Please enter the Password'})
       }
       if(this.state.email.length==0){
        this.setState({emailError:'Please enter the email'})
    }
        if(this.state.Username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0){
            alert('Signup Successfully')
        }else {
            // alert("Please enter all fields")

        }
    }
    
    render() {
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                   < input value={this.state.Username} onChange={this.Usernamehandler} placeholder="Enter Username" style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'180px'}}/>
                  
                   <p style={{paddingLeft:'5px',color:'red'}}>{this.state.UsernameError}</p>
                   <div>
                   < input value={this.state.password} type={this.state.value?'password':'text'} onChange={this.passwordhandler} placeholder="Enter Password"style={{margin:'10px',padding:'10px',borderRadius:'5px',width:'180px'}}/>
                   <p style={{paddingLeft:'5px',color:'red'}}>{this.state.passwordError}</p>
            <button onClick={this.Hidehandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'50px', backgroundColor:'purple', color:"white"}}>Show</button>
            
            </div>
            < input value={this.state.email} onChange={this.emailhandler} placeholder="Enter email"style={{margin:'10px',padding:'10px',borderRadius:'5px',width:'180px'}}/>
            <p style={{paddingLeft:'5px',color:'red'}}>{this.state.emailError}</p>
            <button onClick={this.submithandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'180px', backgroundColor:'black', color:"white"}} >Signup</button>
            </div>
        )
    }
}

export default SignupApplication;