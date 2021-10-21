import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log("Regular Component render")
        return (
            <div>
                Regular component
              <h3>  {this.props.name}</h3>
            </div>
        )
    }
}

export default RegularComponent
