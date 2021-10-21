
import React, { Component } from 'react'

class RefsInReact extends Component {
    constructor(props) {
        super(props)

      this.inputRef = React.createRef()
    }


    componentDidMount = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
               <input type='text' />
               <input type='password' ref={this.inputRef}/>
               <button >Submit</button>
            </div>
        )
    }
}

export default RefsInReact;