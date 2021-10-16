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
            <div style={{width:'30%',height:'400px',display:'flex',flexDirection:'column', backgroundColor:'grey'}}>
            <form onSubmit={this.handleSubmit}>
            
            
        
            <div >
            <h1 style={{color:'white',marginLeft:"120px"}}>Todo list</h1>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                  <input  placeholder="Get some eggs..."  value={this.state.Getsomeeggs} onChange={this.Getsomeeggshandler}defaultValue="Geteggs" type="text" ref={this.input}style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'200px'}}/>
                  <input onClick={this.Hidehandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'50px',paddingLeft:'2px' ,backgroundColor:'purple', color:"white"}} type="Button" value="Add"/>
                </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:"40px"}}>
                    <div>
                        < input type="checkbox" />
                        <input Placeholder="Geteggs..."  />
                    <button>Delete</button>
                    <button>Edit</button>
                    <li>
              <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
              <button onClick={() => this.props.deleteTodo(this.props.id)}>Edit</button>
              <span>{ this.props.description }</span>
            </li>
          
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input placeholder="Getmilk"/>
                        <button>Delete</button>
                        <button>Edit</button> 
                    </div>
                        <div>
                        <input type="checkbox" />
                        <input placeholder="study for exam"/>
                        <button onClick>Delete</button>
                        <button>Edit</button>
                        </div>
                        <div>
                        <input type="checkbox" />
                        <input placeholder="check twitter"/>
                        <button>Delete</button>
                        <button>Edit</button>
                        </div> 
            </div>
            </div>
            
           </form> 
           </div>
        );
    }
            
        
    }


export default Todolist;
