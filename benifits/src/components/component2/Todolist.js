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
                    </div>
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
           </div>
        );
    }
            
        
    }


export default Todolist;
