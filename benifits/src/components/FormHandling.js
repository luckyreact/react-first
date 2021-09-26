import React, { Component } from 'react'

 class FormHandling extends Component {
     constructor(props) {
     super(props);

     this.state= {
         userName:'',
         email:'',
         comments:'',
         option:''
     }
    }
     userNameHandler = (e) => {
         this.setState({userName:e.target.value})
     }
     emailHandler = (e) => {
         this.setState({email:e.target.value})
     }
     commentHandler = (e) => {
         this.setState({comments:e.target.value})
     }
     optionHandler = (e) => {
         this.setState({options:e.target.value})
     }
     buttonHandler = () => {
        alert(`hi ${this.state.userName} you have selected ${this.state.option} you have made ${this.state.comments} comment You will receive mail to ${this.state.email}`)

     }


    render() {
        return (
            <div>
                 <form style={{display:'flex',flexDirection:'column', alignItems:'center'}} onSubmit={this.buttonHandler}>
                <lable>username</lable>
                <input Value={this.state.userName} onChange={this.userNameHandler} type="text"></input>

                <label>email</label>
                <input value={this.state.email} onChange={this.emailHandler} type="text"></input>

                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.commentHandler} ></textarea>
                 
                 <label>select the option</label>
                 <select value={this.state.option} onChange={this.optionHandler} >
                    <option value= 'react'>React</option>
                    <option value= 'angular'>Angular</option>
                    <option value= 'vue'>vue</option>
                 </select>
                <button type="submit" style={{marginTop:'5px', color:'red'}} >submit</button>
               </form>
            
            </div>
        
        )
    }
}

export default FormHandling;
