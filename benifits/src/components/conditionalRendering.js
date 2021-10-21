import React from 'react'

function ConditionalRendering() {
    const num = 43;
    if(num%2==0){
        return (
            <div>
                <h1>it is even</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>it is not even</h1>
            </div>
        )
    }
   
}

export default ConditionalRendering;
