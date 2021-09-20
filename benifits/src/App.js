import React, { Component, useState } from 'react'
import GreetClass from './components/GreetClass'
import GreetFunctional from './components/GreetFunctional'
import './App.css'
import StateClassComponent from './components/StateClassComponent'
import StateFunctionalComponents from './components/StateFunctionalComponents'
import Jsx from './components/Jsx'
import Destructing from './components/Destructing'
import DestructingFunction from './components/DestructingFunction'
import BindingEventHandler from './components/BindingEventHandler'
import FuncInProps from './components/FuncInProps'
import ConditionalRendering from './components/conditionalRendering'
import ConditionalRenderingWithTernery from './components/ConditionalRenderingWithTernery'

function App() {
    // var name = 'bunny';
    // const [name,setName] =useState('bunny')
    // const buttonHandler = () => {
    //  setName('sunny');
    // }
    return (
      <div className='App'>
        {/* <GreetClass nameProp='bunny' /> */}
        {/* <GreetClass nameProp='sunny'/>
        <GreetClass nameProp='tony'/> */}
        {/* <GreetFunctional nameProp='bunny' /> */}
        {/* <GreetFunctional nameProp='sunny' />
        <GreetFunctional nameProp='tony' /> */}
        {/* <StateClassComponent /> */}
        {/* <StateFunctionalComponents /> */}
        {/* <Jsx /> */}
        {/* <Destructing name="bunny" place="akp" age='25'/> */}
        {/* <DestructingFunction name="bunny" place="akp" age='25'/> */}
        {/* <BindingEventHandler /> */}
        {/* <FuncInProps name={name} buttonHandlerfunction = {buttonHandler}/> */}
        {/* <ConditionalRendering /> */}
        <ConditionalRenderingWithTernery />
      </div>
    )
}

export default App
