import React, { Component } from 'react'
import GreetClass from './components/GreetClass'
import GreetFunctional from './components/GreetFunctional'
import './App.css'
import StateClassComponent from './components/StateClassComponent'
import StateFunctionalComponents from './components/StateFunctionalComponents'

class App extends Component {
  render() {
    // var name = 'bunny';
    return (
      <div className='App'>
        <GreetClass nameProp='bunny'/>
        {/* <GreetClass nameProp='sunny'/>
        <GreetClass nameProp='tony'/> */}
        <GreetFunctional nameProp='bunny' />
        {/* <GreetFunctional nameProp='sunny' />
        <GreetFunctional nameProp='tony' /> */}

        <StateClassComponent />
        <StateFunctionalComponents />
      </div>
    )
  }
}

export default App
