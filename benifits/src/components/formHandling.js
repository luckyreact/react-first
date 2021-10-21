import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             comments:'',
             option:'react'
        }
    }
    
    userNameHandler = (e) => {
        this.setState({username:e.target.value})
    }

    emailHandler = (e) => {
        this.setState({email:e.target.value})
    }
    commentHandler =(e) => {
        this.setState({comments:e.target.value})
    }
    optionsHandler = (e) => {
        this.setState({option:e.target.value})
    }

    buttonHanlder =() => {
        alert(`hi ${this.state.username} you have selected ${this.state.option} you have made ${this.state.comments} comment You will receive mail to ${this.state.email}`)
    }


    render() {
        return (
            <div >
                <form style={{display:'flex',flexDirection:'column'}} onSubmit={this.buttonHanlder}>
                    <label>Username</label>
                    <input value={this.state.username} onChange={this.userNameHandler} type='text'></input>

                    <label>email</label>
                    <input value={this.state.email} onChange={this.emailHandler} type='text'></input>

                    <label>comments</label>
                    <textarea  value={this.state.comments} onChange={this.commentHandler}/>
                    <label>select the option</label>

                    <select value={this.state.option} onChange={this.optionsHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                    <button type="submit" style={{marginTop:'5px'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandling
