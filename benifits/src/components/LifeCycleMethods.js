import React, { Component } from 'react'
import StateClassComponent from './StateClassComponent';

class LifeCycleMethods extends Component {
    constructor(props){
        super(props);
        this.state={
          value:0
        }
        //eventBinding
        console.log("inside the constructor")
    }
    componentDidMount = () => {
        console.log("inside componentDidmount")
        //api calling 
    }

    componentDidUpdate = () => {
        console.log("inside component Did update");
    }
    // componentWillUnmount = () => {
    //     console.log("inside component will unMount")
    // }

    plusHandler =() =>{
      this.setState({value:this.state.value+1})
    }
    minusHandler =() => {
        if(this.state.value >0){
        this.setState({value:this.state.value-1})
        }
    }
    render() {
        console.log("inside the render")
        return (
            <>
            {this.state.value % 2 ==0 ?
                <h1>even</h1>:
                <StateClassComponent />
              }
            <div style={{width:'80px',height:'30px', border:'1px solid black',display:'flex',flexDirection:'row',borderRadius: '20px',backgroundColor: 'rgb(233, 240, 240)',boxShadow: '0 4px 8px rgba(0, 0, 0.05)'}}>
                <div onClick={this.minusHandler} style={{width:'30px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>-</div>
                <div style={{width:'30px',borderLeft:'1px solid black',borderRight:'1px solid black'  ,display:'flex',alignItems:'center',justifyContent:'center'}}>{this.state.value}</div>
                <div onClick={this.plusHandler} style={{width:'30px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>+</div>
            </div>
    
            </>
        );
    }
}

export default LifeCycleMethods
