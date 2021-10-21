import React, { Component } from 'react'
 class Todo2 extends Component {
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
        console.log(x);
        const CheckedList = this.state.todoList.map((y)=>{
            if(y.id === x.id){
                return {
                    ...y,
                    checked:!x.checked
                }
            }
            return y;
        })
        console.log(CheckedList);
        this.setState({todoList:CheckedList});
    }
    deleteHandler = (x) => {
        // console.log(x);
        const deletedItems = this.state.todoList.filter((todo)=>todo.id !== x.id);
        // console.log(deletedItems);
        this.setState({todoList:deletedItems});
    }

    editHandler = (x) => {
        const editedItems = this.state.todoList.map((y)=>{
            if(y.id === x.id){
                return {
                    ...y,
                    isEdit:true
                }
            }
            return y;
        })

        this.setState({todoList:editedItems});
        this.setState({editElement:x.title})

    }

    editInputHandler = (element) => {
        this.setState({editElement:element.target.value})
    }

    saveHandler = (x) => {
        const SaveItems = this.state.todoList.map((y)=>{
            if(y.id === x.id){
                return {
                    ...y,
                    isEdit:false,
                    title:this.state.editElement
                }
            }
            return y;
        })
        this.setState({todoList:SaveItems});

    }


    render() {
        return (
            <div style={{width:'30%',paddingRight: '30px', display:'flex',flexDirection:'column', borderRadius:'10px' ,boxShadow:'0 4px 8px rgba(0, 0, 0.05)',border: '2px solid blue',backgroundColor:'grey'}}>
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

                            {x.isEdit? 
                            <input value={this.state.editElement} onChange={this.editInputHandler}/> 
                            :
                            <h3 style={{width:'200px'}}>{x.checked?<del>{x?.title}</del>:x?.title}</h3>

                     //     <button style={{backgroundColor:'blue', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.editHandler(x)}>Edit</button>  
                            }
                           {x.isEdit? 
                          <button style={{backgroundColor:'blue', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.saveHandler(x)}>Save</button> : 
                          <button style={{backgroundColor:'blue', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.editHandler(x)}>Edit</button>  }
                          <button style={{backgroundColor:'red', color:'white',margin:'10px',padding:'5px',borderRadius:'5px'}} onClick = {()=> this.deleteHandler(x)}>Delete</button>

                      </div>
                      ))}
            </div>
            </div>
           </div>
        );
    }
            
        
    }
export default Todo2;