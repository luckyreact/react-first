import React ,{useState}from 'react'

function StateFunctionalComponents() {
    const [place,setPlacename] = useState('Anakapalli')

    const buttonHandler = () => {
        setPlacename('Vizag');
    }
    return (
        <div>
            <h1>My place name in functional component is {place}</h1>
            <button onClick={buttonHandler}>Submit</button>
        </div>
    )
}

export default StateFunctionalComponents;
