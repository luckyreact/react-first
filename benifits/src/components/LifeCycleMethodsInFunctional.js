import React ,{useEffect, useState}from 'react'

 function LifeCycleMethodsInFunctional() {
     const [value,setValue] = useState(0)
     useEffect(()=>{
         console.log("inside useEffect hook")
     },[value])
     //component did mount,
     //componentdidUpdate

     const buttonHandler = () => {
         setValue(value+1);
     }
    return (
        <div>
            <h1>UseEffect</h1>
            <h1>{value}</h1>
            <button onClick={buttonHandler}><h1>+</h1></button>
        </div>
    )
}
export default LifeCycleMethodsInFunctional;