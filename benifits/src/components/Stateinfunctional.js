import React, {useeffect,useState}from 'react'

function StateFunctional() {

    const [place,setplacename] = useState('Munagapaka')

    const buttonHandler = () => {
        setplacename('Vizag');

    }
    return(
        <div>
            <h1>My place name in functional component is {place}</h1>
        
        <button onClick={buttonHandler}>Submit</button>
        </div>
    )
}

export default StateFunctional;
