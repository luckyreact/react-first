import React, { PureComponent } from 'react'

class PureComponentExample extends PureComponent {
    render() {
        console.log("pure component render")
        return (
            <div>
                PureComponent
               <h3> {this.props.name}</h3>
            </div>
        )
    }
}

export default PureComponentExample

