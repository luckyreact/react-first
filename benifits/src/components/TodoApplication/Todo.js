import React, { Component } from 'react'

 class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todoList : [],
            element:'',
            editElement:''
        }
    }

    inputHandler = (e) => {
        this.setState({element:e.target.value})
    }

    AddButtonHandler = () => {
        //   this.state.todoList.push(this.state.element);
        this.setState({todoList:[{id:Date.now(),title:this.state.element,checked:false,isEdit:false}, ...this.state.todoList]});
        this.setState({element:''})
    }

    CheckHandler = (x) => {
      const CheckedList =  this.state.todoList.map((y) => {
            if(x.id === y.id){
              return {
                  ...y,
                  checked:!x.checked
              }
            }
            return y
        })
        this.setState({todoList:CheckedList});
    }

    deleteHandler = (x) => {
        const CheckedList =  this.state.todoList.filter((y) => x.id != y.id)
        this.setState({todoList:CheckedList});
    }

    editHandler = (x) => {
        this.setState({editElement:x.title})
        const CheckedList =  this.state.todoList.map((y) => {
            if(x.id === y.id){
              return {
                  ...y,
                  isEdit:!x.isEdit
              }
            }
            return y
        })
        this.setState({todoList:CheckedList});
    }

    editInputHandler = (e) => {
        this.setState({editElement:e.target.value});
    }

    saveHandler = (x) => {
        const CheckedList =  this.state.todoList.map((y) => {
            if(x.id === y.id){
              return {
                  ...y,
                  isEdit:!x.isEdit,
                  title:this.state.editElement
              }
            }
            return y
        })
        this.setState({todoList:CheckedList});
    }


    render() {
        return (
            <div style={{width:'30%',display:'flex',flexDirection:'column', borderRadius:'10px' ,boxShadow:'0 4px 8px rgba(0, 0, 0.05)',border: '2px solid blue',backgroundColor:'grey'}}>
            <div >
            <h1 style={{color:'white',marginLeft:"120px"}}>Todo list</h1>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                  <input  placeholder="Get some eggs..."  value={this.state.element} onChange={this.inputHandler} type="text" style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'200px'}}/>
                  <button onClick={this.AddButtonHandler} style={{margin:'10px',padding:'10px', borderRadius:'5px',width:'100px',paddingLeft:'2px' ,backgroundColor:'purple', color:"white"}} >Add</button>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:"40px"}}>
                {this.state.todoList.map((x)=>(
                      <div key={x?.id} style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          < input type="checkbox"  onChange={()=>this.CheckHandler(x)}/>
                          {x.checked ?
                        <del>  <h3 style={{width:'200px'}}>{x?.title}</h3></del>:
                         x.isEdit ? 
                        <input style={{width:'200px'}} value={this.state.editElement} onChange={this.editInputHandler} />:
                        <h3 style={{width:'200px',color:'white'}}>{x?.title}</h3>
                    }
                        {  x.isEdit ? 
                          <button style={{backgroundColor:'blue',color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.saveHandler(x)}>Save</button> :
                          <button style={{backgroundColor:'blue', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.editHandler(x)}>Edit</button>  
                        }  
                          <button style={{backgroundColor:'red', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.deleteHandler(x)}>Delete</button>

                      </div>
                ))}

            </div>
            </div>
           </div>
        );
    }
            
        
    }


export default Todolist;