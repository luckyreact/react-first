import React, { useState } from 'react'

function FuncInProps(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={props.buttonHandlerfunction}>Submit</button>
        </div>
    )
}

export default FuncInProps;
