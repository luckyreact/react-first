import React from 'react'

function RegularComponent(props) {
    console.log("regular component")
    return (
        <div>
            <p>regular</p>
            <h1>{props.name}</h1>
        </div>
    )
}

export default RegularComponent;