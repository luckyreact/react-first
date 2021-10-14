import React, {useState}from 'react'

function Opposite() {

    const [alert,setalertname] = useState('open')

    const buttonHandler = () => {
        setalertname('close');

    }
    return(
        <center>
        <div>
            <h1> {alert}</h1>
        
        <button onClick={buttonHandler}>Click</button>
        </div>
        </center>
    )
}

export default Opposite;
