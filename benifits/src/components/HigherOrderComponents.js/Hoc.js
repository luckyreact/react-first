import React from 'react'

const Hoc = (InitialComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 value:0
            }
        }
        HoverHandler = () => {
            this.setState({value:this.state.value+1});
        }

        render() {
            return(
                <InitialComponent hover={this.HoverHandler} value={this.state.value} name='bunny'/>
            )
        }
    }

    return NewComponent;
}

export default Hoc
