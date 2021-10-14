import React from 'react'
import Destructing from './components/destructinclass';
// import Lifecyclemethodsinfunctional from './components/LifecycleMethodsInFunctional';
import ListRegarding from './components/ListRegarding';
import PropsInClass from './components/Propsinclass';
import PropsInFunctional from './components/Propsinfunction';
import Sample from './components/sample';
import Sample1 from './components/sample1';
import Sample2 from './components/sample2';
import StateClass from './components/Stateinclass';
import StateFunctional from './components/Stateinfunctional';
import Opposite from './Opposite';
//import LifecycleMethodsInFunctional from './LifecycleMethodsInFunctional';
import DemoApplication from './components/component2/DemoApplication';
import Signup from './components/component2/signupApplication';
import Todolist from './components/component2/Todolist';
import Todolist1 from './components/component2/Todolistcopy';

 function App() {
  return (
     <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginTop:'120px'}}>
        {/* <center>
          <PropsInClass nameprop="Lucky"/>
         <PropsInFunctional nameprop="sony"/>
          <StateClass name="Hony"/>
    //       <StateFunctional nameprop="venky"/>
    //       </center> */}
          
    //       {/* <Destructing name = "Prabha" place ="Mumbai" age ="33"/> */}
    //       {/* <Sample/> */}
    //       {/* <Sample1/> */}
    //       {/* <Sample2/> */}
    //       {/* <Opposite/> */}
    //       {/* <ListRegarding/> */}
             {/* <LifecycleMethodsInFunctional/>   */}
    //      {/* <practice1/> */}
            {/* <DemoApplication/>   */}
           {/* <DemoApplication2/> */}
      {/* <Signup/> */}
      <Todolist/> 
      {/* <Todolistcopy/> */}
    </div>

  )
}

export default App;

