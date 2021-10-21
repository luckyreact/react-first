import React, { Component } from 'react'

 class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todoList : [],
            element:''
        }
    }

    inputHandler = (e) => {
        this.setState({element:e.target.value})
    }

    AddButtonHandler = () => {
        //   this.state.todoList.push(this.state.element);
        this.setState({todoList:[this.state.element, ...this.state.todoList]});
        this.setState({element:''})
    }


       
    render() {
        return (
            <div style={{width:'30%',display:'flex',flexDirection:'column', borderRadius:'10px' ,boxShadow:'0 4px 8px rgba(0, 0, 0.05)',border: '2px solid blue',backgroundColor:'grey'}}>
            <form onSubmit={this.handleSubmit}>
            <div >
            <h1 style={{color:'white',marginLeft:"120px"}}>Todo list</h1>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                  <input  placeholder="Get some eggs..."  value={this.state.element} onChange={this.inputHandler} type="text" style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'200px'}}/>
                  <input onClick={this.AddButtonHandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'100px',paddingLeft:'2px' ,backgroundColor:'purple', color:"white"}} type="Button" value="Add"/>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:"40px"}}>
                {this.state.todoList.map((x)=>(
                      <div style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          < input type="checkbox" />
                          <h3 style={{width:'200px'}}>{x}</h3>
                          <button>Delete</button>
                          <button>Edit</button>        
                      </div>
                ))}

            </div>
            </div>
            
           </form> 
           </div>
        );
    }
            
        
    }


export default Todolist;