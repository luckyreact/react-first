import React, {useState}from 'react'

function Sample2() {

    const [alert,setalertname] = useState('helloworld')

    const buttonHandler = () => {
        setalertname('HELLO WORLD');

    }
    return(
        <div>
            <h1> {alert}</h1>
        
        <button onClick={buttonHandler}>Click</button>
        </div>
    )
}

export default Sample2;