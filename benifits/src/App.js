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
import LifeCycleMethodsInFunctional from './components/LifeCycleMethodsInFunctional'
import FormHandling from './components/formHandling'
import SetInterval from './components/SetInterval'
import Parent from './components/PureComponent/Parent'
import DemoApplication from './components/Demo3/DemoApplication'
import Parent2 from './components/PureComponentInFunction/ParentInFunctional'
import RefsInReact from './components/RefsInReact'
import Component1 from './components/HigherOrderComponents.js/Component1'
import Component2 from './components/HigherOrderComponents.js/Component2'
import Todolist from './components/TodoApplication/Todo'
import Todo2 from './components/TodoApplication2/Todo2'
import EditObject from './components/EditObject'

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
        {/* <LifeCycleMethods />  */}
        {/* <LifeCycleMethodsInFunctional /> */}
        {/* <FormHandling /> */}
        {/* <SetInterval /> */}
        {/* <Parent /> */}
        {/* <DemoApplication /> */}
        {/* <Parent2 /> */}
          {/* <RefsInReact /> */}
          {/* <Component1 />
          <Component2 /> */}
          {/* <Todo2 /> */}
          <EditObject />
      </div>
    )
}

export default App
