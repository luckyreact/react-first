import React, { Component } from 'react'
import Greet from './components/Greet'
import GreetFunctional from './components/GreetFunctional'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet/>
        <GreetFunctional />

      </div>
    )
  }
}

export default App
