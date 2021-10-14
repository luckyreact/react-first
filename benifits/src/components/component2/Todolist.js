import React, { Component } from 'react'

 class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Getsomeeggs:'',
            Geteggs:'',
            
        }
    }
        Getsomeeggshandler = (e) => {
            this.setState({Getsomeeggs:e.target.value})
        }  
        Geteggshandler = (e) => {
            this.setState({Geteggs:e.target.value})
        }  
        
        Hidehandler = () => {
            this.setState({value:!this.state.value})
   
        }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
            
            
        
            <div style={{display:'flex',flexDirection:'column', backgroundColor:'grey'}}>
            <h1 style={{margin:'10px', paddingTop:'10px',paddingInline:'550px', fontFamily:'serif'}}>Todo list</h1>
            <div>
            <input placeholder="Get some eggs..."  value={this.state.Getsomeeggs} onChange={this.Getsomeeggshandler}defaultValue="Geteggs" type="text" ref={this.input}style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'1050px'}}/>
            <input onClick={this.Hidehandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'50px',paddingLeft:'2px' ,backgroundColor:'purple', color:"white"}} type="Button" value="Add"/>
            </div>
            <div>
          
        < input type="checkbox" />
        <input Placeholder="Geteggs..."  />
        <div>
            <input type="checkbox" />
            <input placeholder="Getmilk"/>
               </div>
               <div>
            <input type="checkbox" />
            <input placeholder="study for exam"/>
               </div>
               <div>
            <input type="checkbox" />
            <input placeholder="check twitter"/>
               </div> 
            </div>
            </div>
            
           </form> 
        );
    }
            
        
    }


export default Todolist;
