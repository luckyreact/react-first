import React,{Component} from "react";
class Sample1 extends Component{
constructor(props){
    super(props)
    this.state ={ alert: "hello world"}
    
    }
    


 buttonHandler = () =>{
    this.setState ({alert: this.state.alert.toUpperCase()}) 
 }
    render() {
        return(
<div>
    <h1> { this.state.alert}</h1>
    <button onClick= {this.buttonHandler}>Click</button>
</div>
        )
    }
  }
    export default Sample1

