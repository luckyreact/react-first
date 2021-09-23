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
import ListRendering from './components/ListRendering'
import DemoStyle from './components/DemoForStyles/DemoStyle'
import DemoForStyles2 from './components/DemoForStyles2/DemoForStyles2'
import HandleInput from './components/HandleInput'
import DemoForInputHandler from './components/DemoForInputHandler'
import LifeCycleMethods from './components/LifeCycleMethods'

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
        {/* <ConditionalRenderingWithTernery /> */}
        {/* <ListRendering /> */}
        {/* <DemoStyle /> */}
        {/* <DemoForStyles2 /> */}
        {/* <HandleInput /> */}
        {/* <DemoForInputHandler /> */}
        <LifeCycleMethods />
      </div>
    )
}

export default App
