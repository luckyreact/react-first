import React,{Component} from "react";
class Sample extends Component{
    constructor(props){
        super(props)
        this.state = {value: true}
    }
    buttonHandler = () => {
        this.setState({value: !this.state.value})
    }
      
    render(){
        return(
        <div>
           <button onClick={this.buttonHandler}>{this.state.value ? "yes": "No"}</button>
        </div>
           
        )
    }
}
export default Sample;