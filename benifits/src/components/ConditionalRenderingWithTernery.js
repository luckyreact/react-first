import React from 'react'

function ConditionalRenderingWithTernery() {

    const num = 45;
    return (
        <div>
            {num%2==0 ? <h1>It is even</h1> : <h1>It is odd</h1>}
        </div>
    )
}

export default ConditionalRenderingWithTernery;
