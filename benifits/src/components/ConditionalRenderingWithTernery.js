import React from 'react'

function ConditionalRenderingWithTernery() {
    const num =147854346;
    return (
        <div>
            {num%8===0 ? <h1> it is even </h1> : <h1> it is odd </h1>}
        </div>
    )
}

export default ConditionalRenderingWithTernery;

