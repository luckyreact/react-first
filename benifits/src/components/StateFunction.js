import React, {useState} from "react";

function StateFunctionalComponents(){
    const[place,setPlacename] = useState('AKP')

    const buttonHandler = () => {
        setPlacename("vizag");

    }
    return(
        <div>
            <h1>my place name in functional component is {place}</h1>
            <button onClick={buttonHandler}>submit</button>
        </div>
    );
};
export default StateFunctionalComponents;