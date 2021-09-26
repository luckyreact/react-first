import React,{useEffect, useState} from 'react'

 function LifeCycleMethodsInFunctional() {
     const [Value, setValue] = useState(0)
      useEffect(() => {
         console.log("inside useEffect hook ")
      },[Value])

     const buttonHandler = () => {
         setValue(Value+1);
    }
    return (
        <div>
        <h1>useEffect</h1>
        <h1>value</h1>
        <button onClick={buttonHandler}><h1>+</h1></button>
            
        </div>
    )
}

export default LifeCycleMethodsInFunctional;
