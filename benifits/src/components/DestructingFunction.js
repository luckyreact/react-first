import React from 'react'

function DestructingFunction({name,place,age}) {
    return (
        <div>
            <h1>Functional</h1>
            <h1>Name : {name}</h1>
            <h1>Place : {place}</h1>
            <h1>age : {age}</h1>
        </div>
    )
}

export default DestructingFunction;
