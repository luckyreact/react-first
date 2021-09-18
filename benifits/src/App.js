import React from 'react'
import PropsInClass from './components/Propsinclass';
import PropsInFunctional from './components/Propsinfunction';
import StateClass from './components/Stateinclass';
import StateFunctional from './components/Stateinfunctional';

 function App() {
  return (
    <div>
       <center>
          <PropsInClass nameprop="Lucky"/>
          <PropsInFunctional nameprop="sony"/>
           <StateClass name="Hony"/>
          <StateFunctional nameprop="venky"/>
          </center>
    </div>

  )
}

export default App;

