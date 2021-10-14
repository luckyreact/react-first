import React,{useEffect} from 'react'

function LifecycleMethodsInFunctional() {

    useEffect(()=>{
        console.log("inside useEffect hook")
    })
    return (
        <div>
            <h1> UseEffect</h1>
        </div>
    )
}

export default LifecycleMethodsInFunctional;