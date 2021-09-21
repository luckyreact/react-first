import React from 'react'

function ConditionalRendering() {
    const num = 235356467568652;
    if (num%2===0) {
    return (
        <div>
            <h1>this is even</h1>
        </div>
    )
}
else {
    return (
        <div>
            <h1>this is not even</h1>
        </div>
    )
}

}

export default ConditionalRendering;
